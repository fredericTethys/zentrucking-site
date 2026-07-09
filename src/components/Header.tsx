import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import './Header.css'

const NAV = [
  { to: '/drivers', label: 'Drivers & Owner-Operators' },
  { to: '/fleets', label: 'Small Fleets' },
  { to: '/enterprise', label: 'Enterprise & Embed' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />

        <button
          className="site-header__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="btn btn--primary site-nav__cta" href="#contact" onClick={() => setOpen(false)}>
            Book a demo
          </a>
        </nav>
      </div>
    </header>
  )
}
