import { useState, useEffect } from 'react'
import Quiz from '../components/Quiz'
import { atmosphereShieldingQuiz } from '../data/quizData'
import { useProgress } from '../hooks/useProgress'
import './AtmosphereShielding.css'

interface BuilderState {
  charisma: number
  mystique: number
  visibility: number
  heatRetention: number
}

interface VulnerabilityState {
  emotionalGuard: number
  rawness: number
  storytelling: number
  volatility: number
}

function AtmosphereShielding() {
  const [mode, setMode] = useState<'venus' | 'mars'>('venus')
  const [venusState, setVenusState] = useState<BuilderState>({
    charisma: 70,
    mystique: 60,
    visibility: 80,
    heatRetention: 65
  })
  const [marsState, setMarsState] = useState<VulnerabilityState>({
    emotionalGuard: 30,
    rawness: 75,
    storytelling: 85,
    volatility: 60
  })
  const [showQuiz, setShowQuiz] = useState(false)
  const { markModuleVisited, saveQuizScore, getModuleProgress } = useProgress()
  
  const moduleId = 'atmosphere-shielding'
  const moduleProgress = getModuleProgress(moduleId)

  useEffect(() => {
    markModuleVisited(moduleId)
  }, [markModuleVisited])

  const handleQuizComplete = (score: number) => {
    saveQuizScore(moduleId, score)
  }

  const calculateVenusBrightness = () => {
    const { charisma, mystique, visibility } = venusState
    const factors = [charisma, mystique, visibility]
    const average = factors.reduce((sum, val) => sum + val, 0) / factors.length
    return Math.min(100, average)
  }

  const calculateGreenhouseEffect = () => {
    const { charisma, mystique, heatRetention } = venusState
    // Weighted average: charisma 40%, mystique 30%, heat retention 30%
    const CHARISMA_WEIGHT = 0.4
    const MYSTIQUE_WEIGHT = 0.3
    const HEAT_WEIGHT = 0.3
    return Math.min(100, (charisma * CHARISMA_WEIGHT + mystique * MYSTIQUE_WEIGHT + heatRetention * HEAT_WEIGHT))
  }

  const calculateMarsScars = () => {
    const { rawness, storytelling, volatility } = marsState
    return Math.min(100, (rawness * 0.4 + storytelling * 0.4 + volatility * 0.2))
  }

  const calculateShieldStrength = () => {
    return marsState.emotionalGuard
  }

  const getVenusStatus = () => {
    const brightness = calculateVenusBrightness()
    const greenhouse = calculateGreenhouseEffect()
    
    if (brightness > 80 && greenhouse > 70) {
      return {
        status: 'SUPERSTAR',
        color: '#FFC649',
        message: 'Maximum visibility! The brand atmosphere is trapping attention effectively.'
      }
    } else if (brightness > 50 || greenhouse > 50) {
      return {
        status: 'RISING',
        color: '#DAA520',
        message: 'Building presence. Increase charisma and mystique to trap more attention.'
      }
    } else {
      return {
        status: 'UNDERGROUND',
        color: '#8C7853',
        message: 'Low visibility. Work on building the brand atmosphere.'
      }
    }
  }

  const getMarsStatus = () => {
    const scars = calculateMarsScars()
    const shield = calculateShieldStrength()
    
    if (shield < 30 && scars > 70) {
      return {
        status: 'BEAUTIFUL SCARS',
        color: '#CD5C5C',
        message: 'Vulnerability creates powerful storytelling. The emotional landscape is rich.'
      }
    } else if (shield > 70) {
      return {
        status: 'SHIELDED',
        color: '#DAA520',
        message: 'Too guarded. Lower defenses to create authentic connection.'
      }
    } else {
      return {
        status: 'BALANCED',
        color: '#4FD0E0',
        message: 'Finding balance between protection and vulnerability.'
      }
    }
  }

  const status = mode === 'venus' ? getVenusStatus() : getMarsStatus()

  return (
    <div className="atmosphere-shielding">
      <div className="container">
        <header className="module-header">
          <h1>🛡️ Atmosphere & Shielding Builder</h1>
          <p className="module-subtitle">Ecology & Emotional Intelligence</p>
        </header>

        <div className="mode-selector">
          <button
            className={`mode-button ${mode === 'venus' ? 'active' : ''}`}
            style={{ borderColor: '#FFC649' }}
            onClick={() => setMode('venus')}
          >
            <span className="mode-icon">♀</span>
            <div>
              <div className="mode-name">Venus Mode</div>
              <div className="mode-artist">Method Man - Build Your Brand</div>
            </div>
          </button>
          <button
            className={`mode-button ${mode === 'mars' ? 'active' : ''}`}
            style={{ borderColor: '#CD5C5C' }}
            onClick={() => setMode('mars')}
          >
            <span className="mode-icon">♂</span>
            <div>
              <div className="mode-name">Mars Mode</div>
              <div className="mode-artist">Ghostface - Vulnerability Map</div>
            </div>
          </button>
        </div>

        {mode === 'venus' ? (
          <div className="content-panel">
            <div className="builder-section card">
              <h2 style={{ color: '#FFC649' }}>♀ Venus: Brand Atmosphere Builder</h2>
              <p className="section-description">
                Like Venus's thick atmosphere that traps heat (greenhouse effect), Method Man's
                charisma creates an atmosphere that traps attention and makes him the brightest
                star in the sky.
              </p>

              <div className="sliders">
                <div className="slider-group">
                  <label>
                    Charisma Level
                    <span className="slider-value">{venusState.charisma}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={venusState.charisma}
                    onChange={(e) => setVenusState({ ...venusState, charisma: parseInt(e.target.value) })}
                  />
                  <p className="slider-help">Your natural magnetism and star power</p>
                </div>

                <div className="slider-group">
                  <label>
                    Mystique (Cloud Cover)
                    <span className="slider-value">{venusState.mystique}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={venusState.mystique}
                    onChange={(e) => setVenusState({ ...venusState, mystique: parseInt(e.target.value) })}
                  />
                  <p className="slider-help">The "Tical" persona - mystery that intrigues</p>
                </div>

                <div className="slider-group">
                  <label>
                    Visibility (Brightness)
                    <span className="slider-value">{venusState.visibility}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={venusState.visibility}
                    onChange={(e) => setVenusState({ ...venusState, visibility: parseInt(e.target.value) })}
                  />
                  <p className="slider-help">How visible you are in the mainstream</p>
                </div>

                <div className="slider-group">
                  <label>
                    Heat Retention (Greenhouse Effect)
                    <span className="slider-value">{venusState.heatRetention}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={venusState.heatRetention}
                    onChange={(e) => setVenusState({ ...venusState, heatRetention: parseInt(e.target.value) })}
                  />
                  <p className="slider-help">How well you trap and sustain attention</p>
                </div>
              </div>

              <div className="metrics-display">
                <div className="metric-card">
                  <h3>Brightness Score</h3>
                  <div className="metric-value" style={{ color: '#FFC649' }}>
                    {calculateVenusBrightness().toFixed(0)}%
                  </div>
                  <p>Overall visibility and star power</p>
                </div>
                <div className="metric-card">
                  <h3>Greenhouse Effect</h3>
                  <div className="metric-value" style={{ color: '#FF8C00' }}>
                    {calculateGreenhouseEffect().toFixed(0)}%
                  </div>
                  <p>Attention trapped and sustained</p>
                </div>
              </div>
            </div>

            <div className="status-panel card" style={{ borderColor: status.color }}>
              <h3 style={{ color: status.color }}>Brand Status: {status.status}</h3>
              <p>{status.message}</p>
              <div className="science-fact">
                <h4>The Science:</h4>
                <p>
                  Venus traps heat with a thick CO₂ atmosphere (greenhouse effect), making it the
                  hottest planet at 900°F. It's also the brightest object in the night sky after
                  the Moon. Method Man built a similar "atmosphere" - charisma that traps attention
                  and makes him the most visible Wu member.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="content-panel">
            <div className="builder-section card">
              <h2 style={{ color: '#CD5C5C' }}>♂ Mars: Vulnerability Navigation Map</h2>
              <p className="section-description">
                Mars lost its magnetic shield, allowing solar winds to strip its atmosphere,
                leaving it scarred by ancient volcanoes. Ghostface's emotional rawness (no shield)
                creates beautiful, scarred storytelling landscapes.
              </p>

              <div className="sliders">
                <div className="slider-group">
                  <label>
                    Emotional Guard (Magnetic Shield)
                    <span className="slider-value">{marsState.emotionalGuard}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={marsState.emotionalGuard}
                    onChange={(e) => setMarsState({ ...marsState, emotionalGuard: parseInt(e.target.value) })}
                  />
                  <p className="slider-help">How much you protect your emotions</p>
                </div>

                <div className="slider-group">
                  <label>
                    Rawness (Exposed Surface)
                    <span className="slider-value">{marsState.rawness}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={marsState.rawness}
                    onChange={(e) => setMarsState({ ...marsState, rawness: parseInt(e.target.value) })}
                  />
                  <p className="slider-help">Emotional vulnerability in your expression</p>
                </div>

                <div className="slider-group">
                  <label>
                    Storytelling Depth
                    <span className="slider-value">{marsState.storytelling}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={marsState.storytelling}
                    onChange={(e) => setMarsState({ ...marsState, storytelling: parseInt(e.target.value) })}
                  />
                  <p className="slider-help">Complexity of your emotional narratives</p>
                </div>

                <div className="slider-group">
                  <label>
                    Volatility (Volcanic Activity)
                    <span className="slider-value">{marsState.volatility}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={marsState.volatility}
                    onChange={(e) => setMarsState({ ...marsState, volatility: parseInt(e.target.value) })}
                  />
                  <p className="slider-help">Emotional intensity and unpredictability</p>
                </div>
              </div>

              <div className="metrics-display">
                <div className="metric-card">
                  <h3>Shield Strength</h3>
                  <div className="metric-value" style={{ color: '#4FD0E0' }}>
                    {calculateShieldStrength().toFixed(0)}%
                  </div>
                  <p>Protection from exposure</p>
                </div>
                <div className="metric-card">
                  <h3>Scarred Beauty</h3>
                  <div className="metric-value" style={{ color: '#CD5C5C' }}>
                    {calculateMarsScars().toFixed(0)}%
                  </div>
                  <p>Depth created by vulnerability</p>
                </div>
              </div>
            </div>

            <div className="status-panel card" style={{ borderColor: status.color }}>
              <h3 style={{ color: status.color }}>Emotional Status: {status.status}</h3>
              <p>{status.message}</p>
              <div className="science-fact">
                <h4>The Science:</h4>
                <p>
                  Mars lost its magnetic shield billions of years ago, allowing solar wind to strip
                  away its atmosphere. The exposed surface shows ancient volcanic scars. Ghostface
                  (Ironman - iron oxide/rust) similarly lost his "shield" (emotional guard), creating
                  raw, vulnerable storytelling with beautiful scarred landscapes.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="lesson-section card">
          <h2>📚 The Lesson</h2>
          <div className="lesson-content">
            <div className="lesson-column">
              <h3 style={{ color: '#FFC649' }}>Venus Strategy: Building Atmosphere</h3>
              <ul>
                <li>Create a "greenhouse effect" with your brand</li>
                <li>Use mystique to increase intrigue</li>
                <li>Balance visibility with mystery</li>
                <li>Trap attention through sustained charisma</li>
                <li>Become the "brightest star" in your field</li>
              </ul>
            </div>
            <div className="lesson-column">
              <h3 style={{ color: '#CD5C5C' }}>Mars Strategy: Vulnerability as Strength</h3>
              <ul>
                <li>Lowering shields creates authentic connection</li>
                <li>Emotional rawness builds narrative depth</li>
                <li>Scars tell powerful stories</li>
                <li>Volatility drives passionate expression</li>
                <li>Beauty emerges from exposed landscapes</li>
              </ul>
            </div>
          </div>
          <p className="lesson-conclusion">
            <strong>Key Insight:</strong> Both strategies work - Venus builds protective atmospheres
            that amplify presence, while Mars embraces exposure for authentic storytelling. Choose
            your approach based on your goals and context.
          </p>
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
              moduleId={moduleId}
              moduleName="Atmosphere & Shielding"
              questions={atmosphereShieldingQuiz}
              onComplete={handleQuizComplete}
              previousScore={moduleProgress.quizScore}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default AtmosphereShielding
