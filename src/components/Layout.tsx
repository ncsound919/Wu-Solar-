import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const { getCompletedModulesCount, getTotalModulesCount, progress } = useProgress()

  const completedCount = getCompletedModulesCount()
  const totalCount = getTotalModulesCount()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/gravitational-coherence', label: 'Gravitational Coherence' },
    { path: '/lyrical-density', label: 'Lyrical Density' },
    { path: '/atmosphere-shielding', label: 'Atmosphere & Shielding' },
    { path: '/time-capsule', label: 'Time Capsule' },
    { path: '/field-trips', label: 'Field Trips' },
    { path: '/album-guides', label: 'Album Guides' },
  ]

  const getModuleStatus = (path: string) => {
    const moduleId = path.replace('/', '')
    const moduleProgress = progress.modules[moduleId]
    if (!moduleProgress) return null
    if (moduleProgress.completed) return 'complete'
    if (moduleProgress.lastVisited) return 'visited'
    return null
  }

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <span className="logo-icon">☯</span>
              <span className="logo-text">Wu-Tang Solar System</span>
            </Link>
            <div className="header-right">
              <div className="progress-indicator">
                <span className="progress-count">{completedCount}/{totalCount}</span>
                <span className="progress-label">Modules</span>
              </div>
              <nav className="nav">
                {navItems.map((item) => {
                  const status = getModuleStatus(item.path)
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`nav-link ${location.pathname === item.path ? 'active' : ''} ${status ? `status-${status}` : ''}`}
                    >
                      {item.label}
                      {status === 'complete' && <span className="status-badge">✓</span>}
                    </Link>
                  )
                })}
              </nav>
            </div>
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
