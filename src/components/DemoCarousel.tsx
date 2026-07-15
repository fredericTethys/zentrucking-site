import { useRef, useState } from 'react'
import './DemoCarousel.css'

export type Demo = { title: string; src: string; caption?: string }

/** A single demo: shows a branded cover (title + description + play) until tapped.
 *  The <video> element is only created on tap, so nothing downloads until play. */
function DemoCard({ demo }: { demo: Demo }) {
  const [playing, setPlaying] = useState(false)
  return (
    <figure className="democard">
      <div className="democard__frame">
        {playing ? (
          <>
            <video
              src={demo.src}
              controls
              autoPlay
              playsInline
              preload="auto"
              onEnded={() => setPlaying(false)}
            />
            <button
              className="democard__close"
              type="button"
              onClick={() => setPlaying(false)}
              aria-label={`Close demo: ${demo.title}`}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </>
        ) : (
          <button
            className="democard__cover"
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play demo: ${demo.title}`}
          >
            <span className="democard__eyebrow">Demo</span>
            <span className="democard__title">{demo.title}</span>
            {demo.caption ? <span className="democard__desc">{demo.caption}</span> : null}
            <span className="democard__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </figure>
  )
}

/** Non-video tile for "more coming soon". */
function ComingSoonCard({ title, caption }: { title: string; caption?: string }) {
  return (
    <figure className="democard democard--soon">
      <div className="democard__frame">
        <div className="democard__cover democard__cover--soon">
          <span className="democard__eyebrow">Coming soon</span>
          <span className="democard__title">{title}</span>
          {caption ? <span className="democard__desc">{caption}</span> : null}
        </div>
      </div>
    </figure>
  )
}

type Props = {
  items: Demo[]
  comingSoon?: { title: string; caption?: string }
}

export default function DemoCarousel({ items, comingSoon }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('.democard')
    const step = card ? card.getBoundingClientRect().width + 20 : 300
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div className="democarousel">
      <button
        className="democarousel__nav democarousel__nav--prev"
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Previous demos"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      </button>

      <div className="democarousel__track" ref={trackRef}>
        {items.map((d) => (
          <DemoCard key={d.src} demo={d} />
        ))}
        {comingSoon ? <ComingSoonCard title={comingSoon.title} caption={comingSoon.caption} /> : null}
      </div>

      <button
        className="democarousel__nav democarousel__nav--next"
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Next demos"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
      </button>
    </div>
  )
}
