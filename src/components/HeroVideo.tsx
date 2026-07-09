import { useRef, useState, type ReactNode } from 'react'
import './HeroVideo.css'

type Props = {
  /** Path to a muted, loopable MP4 in /public (e.g. "/media/hero.mp4"). */
  src?: string
  /** Optional WebM source for better compression, tried first. */
  webmSrc?: string
  /** Poster image shown before the video loads / if it can't play. */
  poster?: string
  /** Which side the copy sits on. The scrim mirrors to match. */
  align?: 'left' | 'right'
  children: ReactNode
}

/**
 * Full-bleed hero with a looping background video and a brand gradient scrim.
 * The scrim is heaviest on whichever side the copy sits, so text stays legible
 * while the footage stays visible on the opposite side.
 *
 * If no `src` is given (or the file fails to load), it falls back cleanly to the
 * navy brand gradient — so the hero always looks finished.
 */
export default function HeroVideo({
  src,
  webmSrc,
  poster,
  align = 'right',
  children,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ok, setOk] = useState(true)
  const hasVideo = Boolean(src || webmSrc)

  return (
    <section className={`herov herov--${align}`}>
      <div className="herov__bg" aria-hidden="true" />

      {hasVideo && ok && (
        <video
          ref={videoRef}
          className="herov__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onError={() => setOk(false)}
          aria-hidden="true"
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {src && <source src={src} type="video/mp4" />}
        </video>
      )}

      <div className="herov__scrim" aria-hidden="true" />
      <div className="herov__grid" aria-hidden="true" />

      <div className="container herov__inner">
        <div className="herov__col">{children}</div>
      </div>
    </section>
  )
}
