import { Link } from 'react-router-dom'

type Props = {
  variant?: 'navy' | 'white'
  className?: string
}

/**
 * Zen Trucking logo — the brand mark (truck in a brushstroke ring, `public/logo.png`)
 * plus the wordmark. The wordmark recolors for light or dark backgrounds via `variant`.
 */
export default function Logo({ variant = 'navy', className }: Props) {
  const isWhite = variant === 'white'
  const wordColor = isWhite ? '#ffffff' : 'var(--navy)'
  const subColor = isWhite ? 'rgba(255,255,255,0.72)' : 'var(--medium)'

  return (
    <Link
      to="/"
      className={className}
      aria-label="Zen Trucking — home"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}
    >
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        width={40}
        height={40}
        style={{ width: 40, height: 40, display: 'block' }}
      />
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: '1.18rem',
            color: wordColor,
            letterSpacing: '-0.01em',
          }}
        >
          Zen Trucking
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: subColor,
            marginTop: 3,
          }}
        >
          AI-native dispatch
        </span>
      </span>
    </Link>
  )
}
