/* Minimal inline icon set (stroke style), brand-agnostic so they inherit color. */
type P = { size?: number }
const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

export const Check = ({ size = 18 }: P) => (
  <svg {...base(size)}><path d="M20 6 9 17l-5-5" /></svg>
)
export const Phone = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>
)
export const Route = ({ size = 22 }: P) => (
  <svg {...base(size)}><circle cx="6" cy="19" r="3" /><circle cx="18" cy="5" r="3" /><path d="M9 19h6a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6" /></svg>
)
export const Clock = ({ size = 22 }: P) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)
export const Truck = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M10 17h4V5H2v12h2" /><path d="M14 9h4l3 3v5h-3" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
)
export const Sparkles = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3Z" /><path d="M19 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" /></svg>
)
export const Dollar = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M12 2v20" /><path d="M17 6.5A4 4 0 0 0 13 4h-1.5a3.5 3.5 0 0 0 0 7h1a3.5 3.5 0 0 1 0 7H11a4 4 0 0 1-4-2.5" /></svg>
)
export const Shield = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
)
export const Map = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" /><path d="M9 4v14M15 6v14" /></svg>
)
export const Layers = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="m2 13 10 5 10-5M2 18l10 5 10-5" /></svg>
)
export const Plug = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M9 2v6M15 2v6" /><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" /><path d="M12 17v5" /></svg>
)
export const Code = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="m16 18 6-6-6-6M8 6l-6 6 6 6" /></svg>
)
export const Users = ({ size = 22 }: P) => (
  <svg {...base(size)}><circle cx="9" cy="8" r="3.2" /><path d="M2 21a7 7 0 0 1 14 0" /><path d="M16 4a3.2 3.2 0 0 1 0 8M22 21a7 7 0 0 0-5-6.7" /></svg>
)
export const Broom = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M19 5 14 10M9 15l-4 4M14 10l-6.5 6.5a2 2 0 0 0 0 2.8L5 22M14 10l3.5-3.5a2 2 0 0 0-2.8-2.8L11 7" /></svg>
)
export const Radar = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M20 12a8 8 0 1 1-4.5-7.2" /><path d="M12 12 20 4" /><circle cx="12" cy="12" r="2" /></svg>
)
export const Headset = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><path d="M4 13a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2ZM20 13a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0-2-2Z" /><path d="M18 19a5 5 0 0 1-5 4h-1" /></svg>
)
export const Arrow = ({ size = 18 }: P) => (
  <svg {...base(size)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
