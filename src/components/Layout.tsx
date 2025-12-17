import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/gravitational-coherence', label: 'Gravitational Coherence' },
    { path: '/lyrical-density', label: 'Lyrical Density' },
    { path: '/atmosphere-shielding', label: 'Atmosphere & Shielding' },
    { path: '/time-capsule', label: 'Time Capsule' },
  ]

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <span className="logo-icon">☯</span>
              <span className="logo-text">Wu-Tang Solar System</span>
            </Link>
            <nav className="nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            Wu-Tang Solar System © {new Date().getFullYear()} | Teaching Systems Thinking through Shaolin Astronomy
          </p>
          <p className="footer-subtitle">
            "Synergy = (Individual Strength) × (System Integration) × (Gravitational Coherence)"
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
