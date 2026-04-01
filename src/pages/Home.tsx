import { useState, useEffect } from 'react'

const LAUNCH_DATE = new Date('2026-06-01T00:00:00')

function useCountdown(target: Date) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const diff = Math.max(0, target.getTime() - now.getTime())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl sm:text-5xl font-bold text-gray-900 tabular-nums w-20 sm:w-24 py-3 bg-white rounded-xl shadow-sm border border-gray-200">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-xs text-gray-500 uppercase tracking-wider mt-2 font-medium">{label}</span>
    </div>
  )
}

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE)

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Stealth badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-900 text-gray-300 rounded-full text-xs font-medium tracking-wide uppercase mb-8">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Stealth Mode
      </div>

      {/* Hero */}
      <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
        Zen Trucking
      </h1>
      <p className="text-lg sm:text-xl text-gray-500 max-w-lg mx-auto mb-12 leading-relaxed">
        AI-powered dispatch management for modern trucking operations.
        We're building something big.
      </p>

      {/* Countdown */}
      <div className="mb-12">
        <p className="text-sm text-gray-400 uppercase tracking-widest font-medium mb-4">Launching June 2026</p>
        <div className="flex items-center gap-3 sm:gap-5">
          <CountdownUnit value={days} label="Days" />
          <span className="text-2xl text-gray-300 font-light mt-[-20px]">:</span>
          <CountdownUnit value={hours} label="Hours" />
          <span className="text-2xl text-gray-300 font-light mt-[-20px]">:</span>
          <CountdownUnit value={minutes} label="Minutes" />
          <span className="text-2xl text-gray-300 font-light mt-[-20px]">:</span>
          <CountdownUnit value={seconds} label="Seconds" />
        </div>
      </div>

      {/* Email signup teaser */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm text-gray-500">Want early access?</p>
        <a
          href="mailto:dispatch@zenteck.ai?subject=Zen%20Trucking%20Early%20Access"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-600/20 no-underline"
        >
          Get in Touch
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}
