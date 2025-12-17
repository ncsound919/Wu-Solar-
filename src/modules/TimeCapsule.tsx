import { useState, useEffect, useRef } from 'react'
import './TimeCapsule.css'

interface ArchiveItem {
  id: string
  name: string
  type: 'audio' | 'document' | 'photo' | 'video'
  year: number
  description: string
  saved: boolean
  priority: number
}

const GAME_DURATION = 60 // seconds
const FLOOD_DELAY = 5 // seconds before flood starts rising
const FLOOD_RISE_RATE = 100 / (GAME_DURATION - FLOOD_DELAY) // percentage per second

function TimeCapsule() {
  const [gameActive, setGameActive] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(GAME_DURATION)
  const [floodLevel, setFloodLevel] = useState(0)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const timerRef = useRef<number | null>(null)

  const [archives] = useState<ArchiveItem[]>([
    {
      id: '1',
      name: 'Enter the Wu-Tang (36 Chambers)',
      type: 'audio',
      year: 1993,
      description: 'The debut album that changed hip-hop forever',
      saved: false,
      priority: 10
    },
    {
      id: '2',
      name: 'Inspectah Deck - Uncontrolled Substance (Original)',
      type: 'audio',
      year: 1995,
      description: 'Lost in the basement flood - the original album that was never heard',
      saved: false,
      priority: 10
    },
    {
      id: '3',
      name: 'RZA Production Notes',
      type: 'document',
      year: 1994,
      description: 'Handwritten notes on the 5-year plan',
      saved: false,
      priority: 9
    },
    {
      id: '4',
      name: 'Wu-Tang Forever Sessions',
      type: 'audio',
      year: 1997,
      description: 'Unreleased tracks and alternate takes',
      saved: false,
      priority: 8
    },
    {
      id: '5',
      name: 'Original Method Man Photos',
      type: 'photo',
      year: 1993,
      description: 'Behind the scenes of Tical video shoot',
      saved: false,
      priority: 7
    },
    {
      id: '6',
      name: 'GZA - Liquid Swords Demos',
      type: 'audio',
      year: 1995,
      description: 'Early demo versions with alternate beats',
      saved: false,
      priority: 9
    },
    {
      id: '7',
      name: 'Ghostface - Ironman Lyrics',
      type: 'document',
      year: 1996,
      description: 'Handwritten lyrics with annotations',
      saved: false,
      priority: 8
    },
    {
      id: '8',
      name: 'Wu-Tang Clan Tour Footage',
      type: 'video',
      year: 1994,
      description: 'Raw footage from early performances',
      saved: false,
      priority: 7
    },
    {
      id: '9',
      name: 'ODB - Return to the 36 Chambers Outtakes',
      type: 'audio',
      year: 1995,
      description: 'Unreleased chaos and freestyle sessions',
      saved: false,
      priority: 8
    },
    {
      id: '10',
      name: 'Wu-Tang Business Documents',
      type: 'document',
      year: 1993,
      description: 'Original contract negotiations and plans',
      saved: false,
      priority: 6
    },
    {
      id: '11',
      name: 'Raekwon - Cuban Linx Recording Sessions',
      type: 'audio',
      year: 1995,
      description: 'Studio sessions with Ghostface features',
      saved: false,
      priority: 9
    },
    {
      id: '12',
      name: 'Wu-Tang Logo Designs',
      type: 'photo',
      year: 1992,
      description: 'Original sketches and concepts for the W',
      saved: false,
      priority: 6
    }
  ])

  const [items, setItems] = useState(archives)

  useEffect(() => {
    if (gameActive && timeRemaining > 0 && !gameOver) {
      timerRef.current = window.setTimeout(() => {
        setTimeRemaining(prev => prev - 1)
        
        // Flood starts rising after delay
        if (timeRemaining < (GAME_DURATION - FLOOD_DELAY)) {
          setFloodLevel(prev => Math.min(100, prev + FLOOD_RISE_RATE))
        }
      }, 1000)
    } else if (timeRemaining === 0 && gameActive) {
      endGame()
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [gameActive, timeRemaining, gameOver, endGame])

  const startGame = () => {
    setGameActive(true)
    setGameOver(false)
    setTimeRemaining(GAME_DURATION)
    setFloodLevel(0)
    setScore(0)
    setItems(archives.map(item => ({ ...item, saved: false })))
  }

  const saveItem = (id: string) => {
    if (!gameActive || gameOver) return

    const item = items.find(i => i.id === id)
    if (!item || item.saved) return

    setItems(prev => prev.map(i => 
      i.id === id ? { ...i, saved: true } : i
    ))
    setScore(prev => prev + item.priority * 100)
  }

  const endGame = () => {
    setGameActive(false)
    setGameOver(true)
  }

  const savedCount = items.filter(i => i.saved).length
  const totalItems = items.length
  const savedPercentage = (savedCount / totalItems) * 100

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'audio': return '🎵'
      case 'document': return '📄'
      case 'photo': return '📷'
      case 'video': return '🎬'
      default: return '💾'
    }
  }

  const getResultMessage = () => {
    if (savedPercentage >= 80) {
      return {
        title: 'LEGENDARY ARCHIVIST!',
        message: 'You saved the Wu-Tang legacy! Most of the archives survived the flood.',
        color: '#44ff44'
      }
    } else if (savedPercentage >= 50) {
      return {
        title: 'PARTIAL SUCCESS',
        message: 'You saved some important pieces, but much was lost to the flood.',
        color: '#ffaa00'
      }
    } else {
      return {
        title: 'MAJOR LOSS',
        message: 'The flood destroyed most of the archives. History has been lost.',
        color: '#ff4444'
      }
    }
  }

  return (
    <div className="time-capsule">
      <div className="container">
        <header className="module-header">
          <h1>💾 Time Capsule Archive</h1>
          <p className="module-subtitle">Data Preservation & History: The Flood Event</p>
        </header>

        <div className="story-section card">
          <h2>📖 The Story</h2>
          <p>
            In the mid-1990s, a devastating flood struck RZA's basement in Staten Island. The water
            destroyed <strong>160 floppy discs</strong> containing irreplaceable Wu-Tang history,
            including the original version of Inspectah Deck's <em>Uncontrolled Substance</em> album.
          </p>
          <p>
            This event demonstrates a fundamental principle of physics: <strong>entropy</strong> - the
            tendency of systems to move toward disorder. Without proper preservation, data degrades and
            is lost forever, just like a planetary extinction event.
          </p>
          <p>
            Today, RZA is building a real <strong>Time Capsule</strong> for the "Final Chamber" tour
            to preserve Wu-Tang history for future generations. Your mission: save as much as you can
            before the flood destroys everything.
          </p>
        </div>

        {!gameActive && !gameOver && (
          <div className="start-panel card">
            <h2>Ready to Save History?</h2>
            <p>You have {GAME_DURATION} seconds to digitize and save as many archives as possible.</p>
            <p>The flood will start rising after {FLOOD_DELAY} seconds. Prioritize the most important items!</p>
            <button className="start-button" onClick={startGame}>
              Start Archive Mission
            </button>
          </div>
        )}

        {gameActive && (
          <div className="game-panel">
            <div className="game-stats">
              <div className="stat-item">
                <div className="stat-label">Time Remaining</div>
                <div className="stat-value" style={{ color: timeRemaining < 10 ? '#ff4444' : '#44ff44' }}>
                  {timeRemaining}s
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Items Saved</div>
                <div className="stat-value">{savedCount}/{totalItems}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Score</div>
                <div className="stat-value" style={{ color: '#FDB813' }}>{score}</div>
              </div>
            </div>

            <div className="flood-indicator">
              <div className="flood-bar">
                <div 
                  className="flood-fill" 
                  style={{ 
                    height: `${floodLevel}%`,
                    backgroundColor: floodLevel > 80 ? '#ff4444' : floodLevel > 50 ? '#ffaa00' : '#4169E1'
                  }}
                />
              </div>
              <div className="flood-label">
                Water Level: {floodLevel.toFixed(0)}%
              </div>
            </div>

            <div className="archives-grid">
              {items.map(item => (
                <div 
                  key={item.id} 
                  className={`archive-item card ${item.saved ? 'saved' : ''}`}
                  style={{
                    opacity: item.saved ? 0.5 : 1,
                    transform: item.saved ? 'scale(0.95)' : 'scale(1)'
                  }}
                >
                  <div className="item-icon">{getTypeIcon(item.type)}</div>
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="item-year">{item.year}</p>
                    <p className="item-description">{item.description}</p>
                    <div className="item-priority">
                      Priority: {'⭐'.repeat(Math.min(5, Math.ceil(item.priority / 2)))}
                    </div>
                  </div>
                  {!item.saved && (
                    <button onClick={() => saveItem(item.id)} className="save-button">
                      Save to Cloud
                    </button>
                  )}
                  {item.saved && (
                    <div className="saved-badge">✓ SAVED</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {gameOver && (
          <div className="results-panel card">
            <h2 style={{ color: getResultMessage().color }}>
              {getResultMessage().title}
            </h2>
            <p className="results-message">{getResultMessage().message}</p>
            
            <div className="results-stats">
              <div className="result-stat">
                <div className="result-label">Items Saved</div>
                <div className="result-value">{savedCount}/{totalItems}</div>
              </div>
              <div className="result-stat">
                <div className="result-label">Percentage Saved</div>
                <div className="result-value">{savedPercentage.toFixed(0)}%</div>
              </div>
              <div className="result-stat">
                <div className="result-label">Final Score</div>
                <div className="result-value" style={{ color: '#FDB813' }}>{score}</div>
              </div>
            </div>

            <div className="saved-items">
              <h3>Items You Saved:</h3>
              <ul>
                {items.filter(i => i.saved).map(item => (
                  <li key={item.id}>
                    {getTypeIcon(item.type)} {item.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lost-items">
              <h3>Items Lost to the Flood:</h3>
              <ul>
                {items.filter(i => !i.saved).map(item => (
                  <li key={item.id} style={{ color: '#ff4444' }}>
                    {getTypeIcon(item.type)} {item.name}
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={startGame} className="retry-button">
              Try Again
            </button>
          </div>
        )}

        <div className="lesson-section card">
          <h2>📚 The Lesson: Entropy & Data Preservation</h2>
          <div className="lesson-content">
            <h3>The Science of Entropy</h3>
            <p>
              <strong>Entropy</strong> is the second law of thermodynamics: all systems tend toward
              disorder over time. Data loss is the modern equivalent of a planetary extinction event.
              Without active preservation, information degrades and disappears.
            </p>
            
            <h3>The Real-World Application</h3>
            <p>
              RZA's basement flood destroyed 160 floppy discs in the mid-90s, erasing Inspectah Deck's
              original <em>Uncontrolled Substance</em> album and countless other pieces of Wu-Tang history.
              This catastrophic loss taught the importance of:
            </p>
            <ul>
              <li>Multiple backup locations (redundancy)</li>
              <li>Digital preservation over physical media</li>
              <li>Cloud storage and distributed systems</li>
              <li>Regular archival maintenance</li>
            </ul>

            <h3>The Time Capsule Project</h3>
            <p>
              Today, RZA is building a <strong>Time Capsule</strong> for the "Final Chamber" tour to
              preserve Wu-Tang history for future generations. This connects ancient preservation
              techniques (burying artifacts) with modern technology (digital archives).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeCapsule
