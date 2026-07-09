import './VideoPlaceholder.css'

type Props = {
  title: string
  duration?: string
  caption?: string
  /** When you have a real file, pass src (e.g. "/media/driver-app-demo.mp4") and it renders a player. */
  src?: string
  poster?: string
}

/**
 * Styled demo-video slot. With no `src`, it renders an on-brand placeholder with
 * a play affordance and caption — ready to drop in a real MP4 later. With a
 * `src`, it renders a native <video> player.
 */
export default function VideoPlaceholder({ title, duration, caption, src, poster }: Props) {
  return (
    <figure className="videoslot">
      <div className="videoslot__frame">
        {src ? (
          <video controls poster={poster} preload="metadata">
            <source src={src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        ) : (
          <div className="videoslot__ph" role="img" aria-label={`Demo video placeholder: ${title}`}>
            <div className="videoslot__phone">
              <span className="videoslot__notch" />
              <span className="videoslot__line" />
              <span className="videoslot__line short" />
              <span className="videoslot__route" />
            </div>
            <button className="videoslot__play" type="button" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className="videoslot__badge">Demo · {duration ?? '0:45'}</span>
          </div>
        )}
      </div>
      <figcaption className="videoslot__cap">
        <strong>{title}</strong>
        {caption ? <span>{caption}</span> : null}
      </figcaption>
    </figure>
  )
}
