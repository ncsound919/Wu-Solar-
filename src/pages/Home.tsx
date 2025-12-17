import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const modules = [
    {
      path: '/gravitational-coherence',
      title: 'Gravitational Coherence Engine',
      subtitle: 'Physics Simulator',
      description: 'Learn how RZA (The Sun) holds the Wu-Tang system together through gravitational coherence. Adjust variables to see how leadership and vision create stable orbits.',
      icon: '🌟',
      color: '#FDB813'
    },
    {
      path: '/lyrical-density',
      title: 'Lyrical Density Scanner',
      subtitle: 'Linguistics & Geology',
      description: 'Explore the difference between dense Rocky Planets (GZA/Mercury) and atmospheric Gas Giants (ODB/Neptune). Analyze lyrical density vs atmospheric creativity.',
      icon: '🎤',
      color: '#8C7853'
    },
    {
      path: '/atmosphere-shielding',
      title: 'Atmosphere & Shielding Builder',
      subtitle: 'Ecology & Emotional Intelligence',
      description: 'Build brand atmospheres like Venus (Method Man) or navigate vulnerability maps like Mars (Ghostface). Learn how protection and exposure shape outcomes.',
      icon: '🛡️',
      color: '#CD5C5C'
    },
    {
      path: '/time-capsule',
      title: 'Time Capsule Archive',
      subtitle: 'Data Preservation & History',
      description: 'Experience The Flood Event that destroyed 160 floppy discs. Play a mini-game to digitize and save Wu-Tang history before it\'s lost to entropy.',
      icon: '💾',
      color: '#4169E1'
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1>Wu-Tang Solar System</h1>
            <p className="hero-subtitle">
              Shaolin Astronomy: Teaching Systems Thinking through Planetary Science
            </p>
            <p className="hero-description">
              An interactive educational platform that maps the Wu-Tang Clan to the solar system,
              teaching orbital mechanics, planetary science, leadership dynamics, and systems psychology.
            </p>
            <div className="hero-formula">
              <h3>The Synergy Formula</h3>
              <p className="formula">
                Synergy = (Individual Strength) × (System Integration) × (Gravitational Coherence)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="modules">
        <div className="container">
          <h2 className="text-center mb-4">The Four Chambers</h2>
          <div className="modules-grid">
            {modules.map((module) => (
              <Link
                key={module.path}
                to={module.path}
                className="module-card card"
                style={{ borderTopColor: module.color }}
              >
                <div className="module-icon" style={{ color: module.color }}>
                  {module.icon}
                </div>
                <h3>{module.title}</h3>
                <p className="module-subtitle">{module.subtitle}</p>
                <p className="module-description">{module.description}</p>
                <button className="module-button">
                  Enter Chamber →
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container">
          <div className="philosophy-content">
            <h2>Wu-Tang Astrology: Systems Psychology</h2>
            <p>
              This software progresses "Astrology" from mysticism to <strong>Systems Psychology</strong>.
              Instead of asking "What is your sign?", we ask:
            </p>
            <div className="philosophy-questions">
              <div className="question-card">
                <h3>Are you a Sun or a Planet?</h3>
                <p>Do you lead from the center or orbit with purpose?</p>
              </div>
              <div className="question-card">
                <h3>Are you High Density or High Chaos?</h3>
                <p>Are you GZA/Mercury (dense, iron core) or ODB/Neptune (supersonic winds)?</p>
              </div>
              <div className="question-card">
                <h3>Do you have a Magnetic Shield?</h3>
                <p>Are you U-God/Jupiter (protected) or Ghostface/Mars (vulnerable)?</p>
              </div>
            </div>
            <p className="philosophy-conclusion">
              Like the Supreme Mathematics of the 21st century, this software teaches that the
              <strong> Student is the Architect</strong>—using the physics of the solar system to
              understand the gravity of their own social circles.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
