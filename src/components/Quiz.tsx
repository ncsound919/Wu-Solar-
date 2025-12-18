import { useState } from 'react'
import './Quiz.css'

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

interface QuizProps {
  moduleId: string
  moduleName: string
  questions: QuizQuestion[]
  onComplete: (score: number) => void
  previousScore?: number | null
}

function Quiz({ moduleName, questions, onComplete, previousScore }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    
    const isCorrect = selectedAnswer === questions[currentQuestion].correctIndex
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1)
    }
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      const finalScore = Math.round(((correctAnswers + (selectedAnswer === questions[currentQuestion].correctIndex ? 1 : 0)) / questions.length) * 100)
      setIsComplete(true)
      onComplete(finalScore)
    }
  }

  const handleRetake = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setCorrectAnswers(0)
    setIsComplete(false)
  }

  const currentQ = questions[currentQuestion]
  const finalScore = Math.round((correctAnswers / questions.length) * 100)

  if (isComplete) {
    return (
      <div className="quiz-container">
        <div className="quiz-complete">
          <h2>🎓 Quiz Complete!</h2>
          <div className="quiz-score">
            <div className="score-number" style={{ 
              color: finalScore >= 80 ? '#44ff44' : finalScore >= 60 ? '#ffaa00' : '#ff4444' 
            }}>
              {finalScore}%
            </div>
            <p>{correctAnswers} out of {questions.length} correct</p>
          </div>
          
          {finalScore >= 80 ? (
            <p className="score-message">Excellent work! You've mastered {moduleName}!</p>
          ) : finalScore >= 60 ? (
            <p className="score-message">Good job! Review the material and try again for a better score.</p>
          ) : (
            <p className="score-message">Keep studying! Review the module and retake the quiz.</p>
          )}

          {previousScore !== null && previousScore !== undefined && (
            <p className="previous-score">
              Previous best: {previousScore}%
              {finalScore > previousScore && <span className="improved"> ⬆️ Improved!</span>}
            </p>
          )}

          <button onClick={handleRetake} className="retake-button">
            Retake Quiz
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>📝 {moduleName} Quiz</h2>
        <div className="quiz-progress">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="question-container">
        <h3 className="question-text">{currentQ.question}</h3>
        
        <div className="options-list">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedAnswer === index ? 'selected' : ''} ${
                showExplanation 
                  ? index === currentQ.correctIndex 
                    ? 'correct' 
                    : selectedAnswer === index 
                      ? 'incorrect' 
                      : ''
                  : ''
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{option}</span>
              {showExplanation && index === currentQ.correctIndex && (
                <span className="correct-icon">✓</span>
              )}
              {showExplanation && selectedAnswer === index && index !== currentQ.correctIndex && (
                <span className="incorrect-icon">✗</span>
              )}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="explanation-box">
            <h4>💡 Explanation</h4>
            <p>{currentQ.explanation}</p>
          </div>
        )}

        <div className="quiz-actions">
          {!showExplanation ? (
            <button 
              onClick={handleSubmit} 
              disabled={selectedAnswer === null}
              className="submit-button"
            >
              Submit Answer
            </button>
          ) : (
            <button onClick={handleNext} className="next-button">
              {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Quiz
