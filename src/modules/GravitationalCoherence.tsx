import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import planetsData from '../data/planets.json'
import Quiz from '../components/Quiz'
import { gravitationalCoherenceQuiz } from '../data/quizData'
import { useProgress } from '../hooks/useProgress'
import './GravitationalCoherence.css'

interface PlanetProps {
  data: typeof planetsData[0]
  gravityStrength: number
}

function Planet({ data, gravityStrength }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const angle = useRef(Math.random() * Math.PI * 2)

  useFrame((_state, delta) => {
    if (data.id === 'sun') return

    // Orbit around the sun
    angle.current += data.visual.orbitSpeed * gravityStrength
    const x = Math.cos(angle.current) * data.visual.orbitRadius
    const z = Math.sin(angle.current) * data.visual.orbitRadius
    meshRef.current.position.set(x, 0, z)

    // Rotate planet
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <group>
      <mesh ref={meshRef} position={[data.visual.orbitRadius, 0, 0]}>
        <sphereGeometry args={[data.visual.radius, 32, 32]} />
        <meshStandardMaterial
          color={data.visual.color}
          emissive={data.id === 'sun' ? data.visual.color : '#000000'}
          emissiveIntensity={data.id === 'sun' ? 0.5 : 0}
        />
      </mesh>
      
      {/* Orbit line */}
      {data.id !== 'sun' && (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[data.visual.orbitRadius - 0.05, data.visual.orbitRadius + 0.05, 64]} />
          <meshBasicMaterial
            color={data.visual.color}
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  )
}

function SolarSystem({ gravityStrength }: { gravityStrength: number }) {
  return (
    <>
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      
      {planetsData.map((planet) => (
        <Planet key={planet.id} data={planet} gravityStrength={gravityStrength} />
      ))}
      
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={20}
        maxDistance={150}
      />
    </>
  )
}

function GravitationalCoherence() {
  const [gravityStrength, setGravityStrength] = useState(1.0)
  const [selectedPlanet, setSelectedPlanet] = useState(planetsData[0])
  const [showQuiz, setShowQuiz] = useState(false)
  const { markModuleVisited, saveQuizScore, getModuleProgress } = useProgress()
  
  const moduleId = 'gravitational-coherence'
  const moduleProgress = getModuleProgress(moduleId)

  useEffect(() => {
    markModuleVisited(moduleId)
  }, [markModuleVisited, moduleId])

  const handleQuizComplete = (score: number) => {
    saveQuizScore(moduleId, score)
  }

  const getSystemStatus = () => {
    if (gravityStrength < 0.3) return { status: 'COLLAPSED', color: '#ff4444', message: 'System has collapsed! Members drift into the void.' }
    if (gravityStrength < 0.7) return { status: 'UNSTABLE', color: '#ffaa00', message: 'System is unstable. Orbits are erratic.' }
    if (gravityStrength > 1.5) return { status: 'TOO RIGID', color: '#ffaa00', message: 'Control is too tight. Creativity is stifled.' }
    return { status: 'STABLE', color: '#44ff44', message: 'Perfect balance. The Clan operates in harmony.' }
  }

  const status = getSystemStatus()

  return (
    <div className="gravitational-coherence">
      <div className="container">
        <header className="module-header">
          <h1>🌟 Gravitational Coherence Engine</h1>
          <p className="module-subtitle">Physics Simulator: Orbital Mechanics & Leadership Dynamics</p>
        </header>

        <div className="content-layout">
          <div className="visualization-panel">
            <div className="canvas-container">
              <Canvas camera={{ position: [0, 50, 100], fov: 50 }}>
                <SolarSystem gravityStrength={gravityStrength} />
              </Canvas>
            </div>

            <div className="controls-panel">
              <div className="control-group">
                <label htmlFor="gravity-slider">
                  RZA's Gravitational Pull (Production/Vision)
                </label>
                <div className="slider-container">
                  <span>Weak</span>
                  <input
                    id="gravity-slider"
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={gravityStrength}
                    onChange={(e) => setGravityStrength(parseFloat(e.target.value))}
                  />
                  <span>Strong</span>
                </div>
                <div className="gravity-value">
                  Gravity: {gravityStrength.toFixed(1)}x
                </div>
              </div>

              <div className="system-status" style={{ borderColor: status.color }}>
                <h3 style={{ color: status.color }}>System Status: {status.status}</h3>
                <p>{status.message}</p>
              </div>
            </div>
          </div>

          <div className="info-panel">
            <div className="planet-selector">
              <h3>Select a Member/Planet</h3>
              <div className="planet-buttons">
                {planetsData.map((planet) => (
                  <button
                    key={planet.id}
                    className={`planet-button ${selectedPlanet.id === planet.id ? 'active' : ''}`}
                    style={{
                      borderColor: planet.visual.color,
                      backgroundColor: selectedPlanet.id === planet.id ? `${planet.visual.color}22` : 'transparent'
                    }}
                    onClick={() => setSelectedPlanet(planet)}
                  >
                    {planet.member}
                  </button>
                ))}
              </div>
            </div>

            <div className="planet-info card">
              <h2 style={{ color: selectedPlanet.visual.color }}>
                {selectedPlanet.name} - {selectedPlanet.member}
              </h2>
              <p className="aliases">
                AKA: {selectedPlanet.aliases.join(', ')}
              </p>

              <div className="info-section">
                <h3>🔬 Scientific Traits</h3>
                <p><strong>Composition:</strong> {selectedPlanet.scientificTraits.composition}</p>
                <p><strong>Atmosphere:</strong> {selectedPlanet.scientificTraits.atmosphere}</p>
                <ul>
                  {selectedPlanet.scientificTraits.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>🎤 Cultural Traits</h3>
                <p><strong>Style:</strong> {selectedPlanet.culturalTraits.style}</p>
                <p><strong>Role:</strong> {selectedPlanet.culturalTraits.role}</p>
                <p><strong>Lesson Focus:</strong> {selectedPlanet.culturalTraits.lessonFocus}</p>
                <ul>
                  {selectedPlanet.culturalTraits.conceptBlurbs.map((blurb, i) => (
                    <li key={i}>{blurb}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lesson-box card">
              <h3>📚 The Lesson</h3>
              <p>
                <strong>The Science:</strong> The Sun contains 99.8% of the solar system's mass and dictates
                the fate of the planets. Without its gravity, planets would drift into the void.
              </p>
              <p>
                <strong>The Wu-Tang Method:</strong> RZA is placed at the center as the Sun. His "gravity"
                (production/vision) holds the "chaotic" members in orbit. If you reduce the "RZA Gravity"
                too much, the system collapses, simulating how the Clan would have drifted apart without
                his leadership in the early years.
              </p>
              <p>
                <strong>System Archetype:</strong> Some people are "Suns" (Centers of Gravity) who must hold
                space for others, while some are "Planets" who thrive in orbit. Which are you?
              </p>
            </div>
          </div>
        </div>

        <div className="quiz-section">
          {!showQuiz ? (
            <button 
              onClick={() => setShowQuiz(true)} 
              className="quiz-button"
            >
              {moduleProgress.quizCompleted ? '📝 Retake Quiz' : '📝 Take Quiz'}
              {moduleProgress.quizScore !== null && (
                <span className="previous-score"> (Best: {moduleProgress.quizScore}%)</span>
              )}
            </button>
          ) : (
            <Quiz
              moduleName="Gravitational Coherence"
              questions={gravitationalCoherenceQuiz}
              onComplete={handleQuizComplete}
              previousScore={moduleProgress.quizScore}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default GravitationalCoherence
