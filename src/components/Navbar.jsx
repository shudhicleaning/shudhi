import { useState } from 'react'
import { Phone } from 'lucide-react'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Areas', href: '/#areas' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="nav" role="banner">
        <div className="wrap nav-inner">
          <a href="/" className="nav-brand"><em>Shudhi</em></a>

          <nav className="nav-links" aria-label="Main navigation">
            {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>

          <div className="nav-actions">
            <a href="tel:+919292241065" className="nav-call"><Phone size={14} /> 9292241065</a>
            <button className={`nav-burger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={`nav-mobile${open ? ' open' : ''}`}>
        {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a href="tel:+919292241065" className="nav-call" onClick={() => setOpen(false)}><Phone size={14} /> 9292241065</a>
      </div>
    </>
  )
}
