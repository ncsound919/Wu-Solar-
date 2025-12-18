import { useProgress } from '../hooks/useProgress'
import './ProgressDashboard.css'

function ProgressDashboard() {
  const { 
    progress, 
    resetProgress, 
    getCompletedModulesCount, 
    getTotalModulesCount 
  } = useProgress()

  const completedCount = getCompletedModulesCount()
  const totalCount = getTotalModulesCount()
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  const moduleInfo: { [key: string]: { name: string; icon: string; color: string } } = {
    'gravitational-coherence': { name: 'Gravitational Coherence', icon: '🌟', color: '#FDB813' },
    'lyrical-density': { name: 'Lyrical Density', icon: '🎤', color: '#8C7853' },
    'atmosphere-shielding': { name: 'Atmosphere & Shielding', icon: '🛡️', color: '#CD5C5C' },
    'time-capsule': { name: 'Time Capsule', icon: '💾', color: '#4169E1' }
  }

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress()
    }
  }

  return (
    <div className="progress-dashboard card">
      <div className="dashboard-header">
        <h2>📊 Your Progress</h2>
        <button onClick={handleReset} className="reset-button">
          Reset Progress
        </button>
      </div>

      <div className="overall-progress">
        <div className="progress-circle">
          <svg viewBox="0 0 100 100">
            <circle
              className="progress-bg"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#2a2a3a"
              strokeWidth="8"
            />
            <circle
              className="progress-fill"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${completionPercentage * 2.83} 283`}
              transform="rotate(-90 50 50)"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FDB813" />
                <stop offset="100%" stopColor="#DAA520" />
              </linearGradient>
            </defs>
          </svg>
          <div className="progress-text">
            <span className="percentage">{completionPercentage}%</span>
            <span className="label">Complete</span>
          </div>
        </div>
        <div className="progress-stats">
          <div className="stat">
            <span className="stat-value">{completedCount}/{totalCount}</span>
            <span className="stat-label">Modules Completed</span>
          </div>
          <div className="stat">
            <span className="stat-value">{progress.totalScore}</span>
            <span className="stat-label">Total Quiz Score</span>
          </div>
        </div>
      </div>

      <div className="modules-progress">
        <h3>Module Progress</h3>
        <div className="modules-list">
          {Object.entries(progress.modules).map(([moduleId, moduleProgress]) => {
            const info = moduleInfo[moduleId]
            if (!info) return null
            
            return (
              <div key={moduleId} className="module-item">
                <div className="module-info">
                  <span className="module-icon" style={{ color: info.color }}>
                    {info.icon}
                  </span>
                  <span className="module-name">{info.name}</span>
                </div>
                <div className="module-status">
                  {moduleProgress.completed ? (
                    <span className="status-complete">✓ Complete</span>
                  ) : moduleProgress.lastVisited ? (
                    <span className="status-visited">In Progress</span>
                  ) : (
                    <span className="status-not-started">Not Started</span>
                  )}
                  {moduleProgress.quizCompleted && moduleProgress.quizScore !== null && (
                    <span className="quiz-score" style={{ color: info.color }}>
                      Quiz: {moduleProgress.quizScore}%
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProgressDashboard
