import { useState } from 'react'
import { planJourney, isApiConfigured, type JourneyResult } from '../lib/journeyApi'
import './JourneyCalculator.css'

const initial = {
  origin: '',
  destination: '',
  currentLocation: '',
  hosDriveUsedHours: 0,
  hosDutyUsedHours: 0,
}

export default function JourneyCalculator() {
  const [form, setForm] = useState(initial)
  const [result, setResult] = useState<JourneyResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const set = (k: keyof typeof form, v: string | number) =>
    setForm((f) => ({ ...f, [k]: v }))

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await planJourney({
        origin: form.origin,
        destination: form.destination,
        currentLocation: form.currentLocation || form.origin,
        hosDriveUsedHours: Number(form.hosDriveUsedHours) || 0,
        hosDutyUsedHours: Number(form.hosDutyUsedHours) || 0,
      })
      setResult(res)
    } catch (err) {
      setError(
        err instanceof Error
          ? `Couldn't reach the planner (${err.message}).`
          : 'Something went wrong.',
      )
    } finally {
      setLoading(false)
    }
  }

  const maxHour = result ? Math.max(result.totalElapsedHours, 1) : 1

  return (
    <div className="jc">
      <form className="jc__form" onSubmit={onSubmit}>
        <div className="jc__row">
          <label className="jc__field">
            <span>Origin</span>
            <input
              required
              placeholder="e.g. Dallas, TX"
              value={form.origin}
              onChange={(e) => set('origin', e.target.value)}
            />
          </label>
          <label className="jc__field">
            <span>Destination</span>
            <input
              required
              placeholder="e.g. Atlanta, GA"
              value={form.destination}
              onChange={(e) => set('destination', e.target.value)}
            />
          </label>
        </div>

        <div className="jc__row">
          <label className="jc__field">
            <span>Your location now <em>(optional)</em></span>
            <input
              placeholder="Defaults to origin"
              value={form.currentLocation}
              onChange={(e) => set('currentLocation', e.target.value)}
            />
          </label>
          <label className="jc__field jc__field--sm">
            <span>Drive hours used <em>/ 11</em></span>
            <input
              type="number" min={0} max={11} step={0.5}
              value={form.hosDriveUsedHours}
              onChange={(e) => set('hosDriveUsedHours', e.target.value)}
            />
          </label>
          <label className="jc__field jc__field--sm">
            <span>On-duty hours used <em>/ 14</em></span>
            <input
              type="number" min={0} max={14} step={0.5}
              value={form.hosDutyUsedHours}
              onChange={(e) => set('hosDutyUsedHours', e.target.value)}
            />
          </label>
        </div>

        <div className="jc__actions">
          <button className="btn btn--primary" type="submit" disabled={loading}>
            {loading ? 'Planning…' : 'Plan my journey'}
          </button>
          <span className={`jc__mode ${isApiConfigured() ? 'is-live' : ''}`}>
            {isApiConfigured() ? '● Live planner connected' : '○ Illustrative estimate (connect backend for live routing)'}
          </span>
        </div>
      </form>

      {error && <p className="jc__error">{error}</p>}

      {result && (
        <div className="jc__result">
          <div className="jc__stats">
            <Stat label="Distance" value={`${result.distanceMiles.toLocaleString()} mi`} />
            <Stat label="Driving time" value={`${result.driveHours} h`} />
            <Stat label="Breaks / resets" value={`${result.breaks} / ${result.restStops}`} />
            <Stat label="ETA" value={`${result.etaHoursFromNow} h`} highlight />
          </div>

          <div className={`jc__hos ${result.hosOk ? 'ok' : 'reset'}`}>
            {result.hosOk
              ? 'Completes within the current duty cycle.'
              : 'Requires a full 10-hour reset — placed automatically in the plan.'}
          </div>

          <ol className="jc__timeline" aria-label="Planned journey timeline">
            {result.legs.map((leg, i) => (
              <li key={i} className={`jc__leg jc__leg--${leg.kind}`}>
                <span
                  className="jc__bar"
                  style={{ width: `${Math.max(((leg.toHour - leg.fromHour) / maxHour) * 100, 3)}%` }}
                />
                <span className="jc__leg-text">
                  <strong>{leg.label}</strong>
                  <em>
                    {leg.fromHour}h – {leg.toHour}h{leg.detail ? ` · ${leg.detail}` : ''}
                  </em>
                </span>
              </li>
            ))}
          </ol>

          <ul className="jc__notes">
            {result.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`jc__stat ${highlight ? 'is-hi' : ''}`}>
      <span className="jc__stat-val">{value}</span>
      <span className="jc__stat-lbl">{label}</span>
    </div>
  )
}
