import { useState } from 'react'
import './LyricalDensity.css'

interface AnalysisResult {
  density: number
  atmosphere: number
  chaos: number
  ironCore: number
  wordCount: number
  avgWordLength: number
  uniqueWords: number
  scientificWords: number
}

function LyricalDensity() {
  const [mode, setMode] = useState<'mercury' | 'neptune'>('mercury')
  const [inputText, setInputText] = useState('')
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)

  const exampleTexts = {
    mercury: `I'm on a mission, that niggas say is impossible
But when I swing my swords they all choppable
I be the body dropper, the heartbeat stopper
Child educator, plus head amputator
Cause niggas styles are old like Mark 5 sneakers
Lyrics are weak, like clock radio speakers
Don't even stop at my rhyme, let alone at mine
When I'm all about the future, you're just about your time`,
    neptune: `I don't have no trouble with you fucking me
But I have a little problem with you not fucking me
Baby you know me I'm a crazy nigga from the Brooklyn Zoo
And when I rap, I don't know what to do
I just freestyle and let the words come out
My style is wild, there ain't no doubt`
  }

  const analyzeText = (text: string): AnalysisResult => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || []
    const wordCount = words.length
    const totalLength = words.reduce((sum, word) => sum + word.length, 0)
    const avgWordLength = wordCount > 0 ? totalLength / wordCount : 0
    const uniqueWords = new Set(words).size

    const scientificKeywords = [
      'mission', 'impossible', 'future', 'time', 'mission', 'scientific',
      'calculate', 'precision', 'mathematical', 'intellectual', 'wisdom'
    ]
    const scientificWords = words.filter(word => 
      scientificKeywords.some(keyword => word.includes(keyword))
    ).length

    // Density metrics
    const density = Math.min(100, (uniqueWords / wordCount) * 200)
    const ironCore = Math.min(100, avgWordLength * 15)
    const atmosphere = 100 - density
    // Chaos based on repetition and structure (deterministic)
    const repetitionRatio = wordCount > 0 ? (wordCount - uniqueWords) / wordCount : 0
    const chaos = Math.min(100, (atmosphere * 0.6) + (repetitionRatio * 100 * 0.4))

    return {
      density,
      atmosphere,
      chaos,
      ironCore,
      wordCount,
      avgWordLength,
      uniqueWords,
      scientificWords
    }
  }

  const handleAnalyze = () => {
    if (inputText.trim()) {
      setAnalysis(analyzeText(inputText))
    }
  }

  const loadExample = () => {
    const example = mode === 'mercury' ? exampleTexts.mercury : exampleTexts.neptune
    setInputText(example)
  }

  const getModeInfo = () => {
    if (mode === 'mercury') {
      return {
        planet: 'Mercury',
        member: 'GZA',
        color: '#8C7853',
        icon: '☿',
        description: 'Dense, scientific, stripped of filler - like Mercury\'s massive iron core',
        characteristics: [
          'High lyrical density',
          'Scientific precision',
          'Intellectual weight',
          'No atmospheric filler',
          'Stripped to essentials'
        ]
      }
    } else {
      return {
        planet: 'Neptune',
        member: 'Ol\' Dirty Bastard',
        color: '#4169E1',
        icon: '♆',
        description: 'Chaotic, unstructured, high-energy - like Neptune\'s supersonic winds',
        characteristics: [
          'High atmospheric chaos',
          'Unpredictable flow',
          'Raw energy',
          'Supersonic delivery',
          'No father to his style'
        ]
      }
    }
  }

  const modeInfo = getModeInfo()

  return (
    <div className="lyrical-density">
      <div className="container">
        <header className="module-header">
          <h1>🎤 Lyrical Density Scanner</h1>
          <p className="module-subtitle">Linguistics & Geology: Rocky Planets vs Gas Giants</p>
        </header>

        <div className="mode-selector">
          <button
            className={`mode-button ${mode === 'mercury' ? 'active' : ''}`}
            style={{ borderColor: '#8C7853' }}
            onClick={() => setMode('mercury')}
          >
            <span className="mode-icon">☿</span>
            <div>
              <div className="mode-name">Mercury Mode</div>
              <div className="mode-artist">GZA - The Genius</div>
            </div>
          </button>
          <button
            className={`mode-button ${mode === 'neptune' ? 'active' : ''}`}
            style={{ borderColor: '#4169E1' }}
            onClick={() => setMode('neptune')}
          >
            <span className="mode-icon">♆</span>
            <div>
              <div className="mode-name">Neptune Mode</div>
              <div className="mode-artist">ODB - The Chaos</div>
            </div>
          </button>
        </div>

        <div className="content-layout">
          <div className="input-panel">
            <div className="card">
              <div className="panel-header" style={{ borderBottomColor: modeInfo.color }}>
                <h2 style={{ color: modeInfo.color }}>
                  {modeInfo.icon} {modeInfo.planet} - {modeInfo.member}
                </h2>
                <p>{modeInfo.description}</p>
              </div>

              <div className="characteristics">
                <h3>Characteristics:</h3>
                <ul>
                  {modeInfo.characteristics.map((char, i) => (
                    <li key={i}>{char}</li>
                  ))}
                </ul>
              </div>

              <div className="input-area">
                <label htmlFor="text-input">Enter lyrics or text to analyze:</label>
                <textarea
                  id="text-input"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste lyrics here..."
                  rows={10}
                />
                <div className="button-group">
                  <button onClick={loadExample}>
                    Load {modeInfo.member} Example
                  </button>
                  <button onClick={handleAnalyze} disabled={!inputText.trim()}>
                    Analyze Density
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="results-panel">
            {analysis ? (
              <div className="card">
                <h2>Analysis Results</h2>
                
                <div className="metrics">
                  <div className="metric-item">
                    <label>Lyrical Density (Iron Core)</label>
                    <div className="meter-bar">
                      <div
                        className="meter-fill"
                        style={{
                          width: `${analysis.density}%`,
                          backgroundColor: '#8C7853'
                        }}
                      />
                    </div>
                    <span className="metric-value">{analysis.density.toFixed(0)}%</span>
                  </div>

                  <div className="metric-item">
                    <label>Atmospheric Content</label>
                    <div className="meter-bar">
                      <div
                        className="meter-fill"
                        style={{
                          width: `${analysis.atmosphere}%`,
                          backgroundColor: '#4169E1'
                        }}
                      />
                    </div>
                    <span className="metric-value">{analysis.atmosphere.toFixed(0)}%</span>
                  </div>

                  <div className="metric-item">
                    <label>Chaos Level (Wind Speed)</label>
                    <div className="meter-bar">
                      <div
                        className="meter-fill"
                        style={{
                          width: `${analysis.chaos}%`,
                          backgroundColor: '#CD5C5C'
                        }}
                      />
                    </div>
                    <span className="metric-value">{analysis.chaos.toFixed(0)}%</span>
                  </div>

                  <div className="metric-item">
                    <label>Iron Core Strength</label>
                    <div className="meter-bar">
                      <div
                        className="meter-fill"
                        style={{
                          width: `${analysis.ironCore}%`,
                          backgroundColor: '#DAA520'
                        }}
                      />
                    </div>
                    <span className="metric-value">{analysis.ironCore.toFixed(0)}%</span>
                  </div>
                </div>

                <div className="stats">
                  <h3>Statistics</h3>
                  <div className="stat-grid">
                    <div className="stat-box">
                      <div className="stat-label">Total Words</div>
                      <div className="stat-value">{analysis.wordCount}</div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-label">Unique Words</div>
                      <div className="stat-value">{analysis.uniqueWords}</div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-label">Avg Word Length</div>
                      <div className="stat-value">{analysis.avgWordLength.toFixed(1)}</div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-label">Scientific Terms</div>
                      <div className="stat-value">{analysis.scientificWords}</div>
                    </div>
                  </div>
                </div>

                <div className="interpretation">
                  <h3>Interpretation</h3>
                  {analysis.density > 60 ? (
                    <p>
                      <strong style={{ color: '#8C7853' }}>High Density (Mercury/GZA):</strong> This text exhibits
                      strong lyrical density with minimal filler. Like Mercury's iron core, the content is
                      compact and heavy with meaning.
                    </p>
                  ) : (
                    <p>
                      <strong style={{ color: '#4169E1' }}>High Atmosphere (Neptune/ODB):</strong> This text has
                      high atmospheric content and chaos. Like Neptune's supersonic winds, the flow is
                      unpredictable and energy-driven.
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="card placeholder">
                <h2>Ready to Analyze</h2>
                <p>Enter or load example text, then click "Analyze Density" to see results.</p>
                <div className="placeholder-icon">📊</div>
              </div>
            )}
          </div>
        </div>

        <div className="lesson-section card">
          <h2>📚 The Lesson</h2>
          <div className="lesson-grid">
            <div className="lesson-item">
              <h3 style={{ color: '#8C7853' }}>Mercury (GZA) - Dense & Scientific</h3>
              <p>
                Mercury is a small, hot, rocky world with a massive iron core stripped of its outer layers.
                GZA's lyrics mirror this - dense, scientific, and stripped of filler. The "Iron Core" of
                Liquid Swords represents pure lyrical density.
              </p>
            </div>
            <div className="lesson-item">
              <h3 style={{ color: '#4169E1' }}>Neptune (ODB) - Chaotic & Atmospheric</h3>
              <p>
                Neptune has the fastest winds in the solar system - up to 1,500 mph of pure chaotic energy.
                ODB's style mirrors this: unstructured, high-energy, and unpredictable. No father to his style,
                pure atmospheric chaos.
              </p>
            </div>
          </div>
          <p className="lesson-conclusion">
            <strong>Educational Output:</strong> Students learn to identify "dense" writing (high information
            per word) versus "atmospheric" creativity (high energy and chaos). Both styles have value in
            different contexts.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LyricalDensity
