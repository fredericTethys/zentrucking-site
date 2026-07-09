/* ============================================================
   Journey planning API client
   ------------------------------------------------------------
   The driver "journey planner" on the site calls a real backend
   when VITE_JOURNEY_API_URL is set. Until then, it falls back to
   a client-side illustrative estimate so the UI is fully usable.

   ---- WIRING TO YOUR REAL API -------------------------------
   1. Set VITE_JOURNEY_API_URL in .env (see .env.example), e.g.
        VITE_JOURNEY_API_URL=https://api.zentrucking.ai/v1/journey/plan
      Optionally set VITE_JOURNEY_API_KEY for a bearer token.

   2. Your endpoint should accept POST JSON matching
      `JourneyRequest` and return JSON matching `JourneyResult`
      (see the interfaces below). Adjust `mapResponse()` if your
      backend's field names differ — that's the only place that
      needs to change to match an existing contract.
   ============================================================ */

export interface JourneyRequest {
  origin: string
  destination: string
  /** Optional current truck location; defaults to origin. */
  currentLocation?: string
  /** Driving hours already used in the current 11-hour clock. */
  hosDriveUsedHours: number
  /** On-duty hours already used in the current 14-hour window. */
  hosDutyUsedHours: number
  /** Average moving speed assumption in mph (default 55). */
  avgSpeedMph?: number
}

export interface JourneyLeg {
  kind: 'drive' | 'break' | 'rest'
  label: string
  fromHour: number
  toHour: number
  detail?: string
}

export interface JourneyResult {
  origin: string
  destination: string
  distanceMiles: number
  driveHours: number
  breaks: number
  restStops: number
  totalElapsedHours: number
  etaHoursFromNow: number
  legs: JourneyLeg[]
  hosOk: boolean
  notes: string[]
  /** 'api' when returned by the backend, 'estimate' when computed locally. */
  source: 'api' | 'estimate'
}

const HOS = {
  MAX_DRIVE: 11, // hours of driving per shift
  MAX_DUTY: 14, // hours on-duty window
  BREAK_AFTER: 8, // 30-min break required after 8h driving
  BREAK_LEN: 0.5,
  RESET: 10, // 10-hour reset restores the clock
}

const API_URL = import.meta.env.VITE_JOURNEY_API_URL
const API_KEY = import.meta.env.VITE_JOURNEY_API_KEY

export function isApiConfigured(): boolean {
  return Boolean(API_URL && API_URL.trim())
}

/** Round to 1 decimal for display stability. */
const r1 = (n: number) => Math.round(n * 10) / 10

export async function planJourney(req: JourneyRequest): Promise<JourneyResult> {
  if (isApiConfigured()) {
    const res = await fetch(API_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {}),
      },
      body: JSON.stringify(req),
    })
    if (!res.ok) {
      throw new Error(`Journey API responded ${res.status}`)
    }
    const data = await res.json()
    return mapResponse(data, req)
  }
  // No backend configured yet — illustrative estimate.
  return estimateJourney(req)
}

/**
 * Map a backend payload into JourneyResult. If your API already returns this
 * exact shape, this is a pass-through; otherwise remap fields here.
 */
function mapResponse(data: unknown, req: JourneyRequest): JourneyResult {
  const d = data as Partial<JourneyResult>
  return {
    origin: d.origin ?? req.origin,
    destination: d.destination ?? req.destination,
    distanceMiles: d.distanceMiles ?? 0,
    driveHours: d.driveHours ?? 0,
    breaks: d.breaks ?? 0,
    restStops: d.restStops ?? 0,
    totalElapsedHours: d.totalElapsedHours ?? 0,
    etaHoursFromNow: d.etaHoursFromNow ?? d.totalElapsedHours ?? 0,
    legs: d.legs ?? [],
    hosOk: d.hosOk ?? true,
    notes: d.notes ?? [],
    source: 'api',
  }
}

/* ------------------------------------------------------------------
   Client-side illustrative estimator.
   Deterministic distance heuristic (no external routing) so the demo
   works offline. Real routing/mileage comes from the API when wired.
   ------------------------------------------------------------------ */
function pseudoDistance(a: string, b: string): number {
  const s = `${a.trim().toLowerCase()}→${b.trim().toLowerCase()}`
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100000
  // 180–1180 miles, stable per origin/destination pair
  return 180 + (h % 1000)
}

export function estimateJourney(req: JourneyRequest): JourneyResult {
  const speed = req.avgSpeedMph ?? 55
  const distance = pseudoDistance(req.origin, req.destination || req.origin)
  let driveRemaining = distance / speed

  const notes: string[] = []
  const legs: JourneyLeg[] = []
  let clock = 0 // hours from now
  let driveThisShift = Math.min(req.hosDriveUsedHours, HOS.MAX_DRIVE)
  let dutyThisShift = Math.min(req.hosDutyUsedHours, HOS.MAX_DUTY)
  let sinceBreak = 0
  let breaks = 0
  let restStops = 0
  let guard = 0

  while (driveRemaining > 0.01 && guard++ < 50) {
    const driveLeftInShift = Math.min(
      HOS.MAX_DRIVE - driveThisShift,
      HOS.MAX_DUTY - dutyThisShift,
    )

    if (driveLeftInShift <= 0.01) {
      // Need a 10-hour reset
      legs.push({
        kind: 'rest',
        label: '10-hour reset',
        fromHour: r1(clock),
        toHour: r1(clock + HOS.RESET),
        detail: 'Sleeper berth / off-duty. HOS clocks reset.',
      })
      clock += HOS.RESET
      driveThisShift = 0
      dutyThisShift = 0
      sinceBreak = 0
      restStops++
      continue
    }

    if (sinceBreak >= HOS.BREAK_AFTER) {
      // Mandatory 30-minute break
      legs.push({
        kind: 'break',
        label: '30-min break',
        fromHour: r1(clock),
        toHour: r1(clock + HOS.BREAK_LEN),
        detail: 'Required after 8 hours of driving.',
      })
      clock += HOS.BREAK_LEN
      dutyThisShift += HOS.BREAK_LEN
      sinceBreak = 0
      breaks++
      continue
    }

    const untilBreak = HOS.BREAK_AFTER - sinceBreak
    const segment = Math.min(driveRemaining, driveLeftInShift, untilBreak)

    legs.push({
      kind: 'drive',
      label: `Drive ${r1(segment)} h`,
      fromHour: r1(clock),
      toHour: r1(clock + segment),
      detail: `≈ ${Math.round(segment * speed)} mi at ${speed} mph`,
    })
    clock += segment
    driveThisShift += segment
    dutyThisShift += segment
    sinceBreak += segment
    driveRemaining -= segment
  }

  const totalDrive = distance / speed
  const hosOk = restStops === 0
  if (!hosOk) {
    notes.push(
      `This trip can't be completed inside one duty cycle — it needs ${restStops} full rest reset${restStops > 1 ? 's' : ''}, placed automatically.`,
    )
  } else if (breaks > 0) {
    notes.push('One 30-minute break is required by hours-of-service rules and is built into the ETA.')
  } else {
    notes.push('Fits comfortably inside the current duty window.')
  }
  notes.push(
    'Illustrative estimate. Live routing mileage, real appointment windows and ELD-based HOS come from the Zen Trucking backend once connected.',
  )

  return {
    origin: req.origin,
    destination: req.destination || req.origin,
    distanceMiles: Math.round(distance),
    driveHours: r1(totalDrive),
    breaks,
    restStops,
    totalElapsedHours: r1(clock),
    etaHoursFromNow: r1(clock),
    legs,
    hosOk,
    notes,
    source: 'estimate',
  }
}
