import React, { useState } from 'react'
import './TestEnglishLevel.css'

function TestEnglishLevel() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState('')

  const questions = [
    // A1 - Básico (1-5)
    {
      id: 1,
      question: "I ___ from Brazil.",
      options: ["am", "is", "are", "be"],
      correct: 0,
      level: "A1"
    },
    {
      id: 2,
      question: "She ___ two brothers.",
      options: ["have", "has", "having", "haves"],
      correct: 1,
      level: "A1"
    },
    {
      id: 3,
      question: "They ___ to work by bus.",
      options: ["goes", "go", "going", "gone"],
      correct: 1,
      level: "A1"
    },
    {
      id: 4,
      question: "I need ___ umbrella.",
      options: ["a", "an", "the", "—"],
      correct: 1,
      level: "A1"
    },
    {
      id: 5,
      question: "He ___ like spicy food.",
      options: ["don't", "doesn't", "isn't", "not"],
      correct: 1,
      level: "A1"
    },
    // A2 - Elementar (6-10)
    {
      id: 6,
      question: "I ___ TV when she called.",
      options: ["watched", "was watching", "watch", "am watching"],
      correct: 1,
      level: "A2"
    },
    {
      id: 7,
      question: "This is ___ book I've ever read.",
      options: ["good", "better", "the best", "most good"],
      correct: 2,
      level: "A2"
    },
    {
      id: 8,
      question: "You ___ smoke here. It's forbidden.",
      options: ["mustn't", "don't have to", "shouldn't", "couldn't"],
      correct: 0,
      level: "A2"
    },
    {
      id: 9,
      question: "I've lived here ___ 2015.",
      options: ["for", "since", "from", "during"],
      correct: 1,
      level: "A2"
    },
    {
      id: 10,
      question: "She asked me ___ I was doing.",
      options: ["what", "that", "if", "which"],
      correct: 0,
      level: "A2"
    },
    // B1 - Intermediário (11-14)
    {
      id: 11,
      question: "If I ___ you, I would apologize.",
      options: ["am", "was", "were", "be"],
      correct: 2,
      level: "B1"
    },
    {
      id: 12,
      question: "The report ___ by tomorrow.",
      options: ["will finish", "will be finished", "finishes", "is finishing"],
      correct: 1,
      level: "B1"
    },
    {
      id: 13,
      question: "He denied ___ the money.",
      options: ["to take", "taking", "take", "took"],
      correct: 1,
      level: "B1"
    },
    {
      id: 14,
      question: "I wish I ___ more time to study.",
      options: ["have", "had", "would have", "having"],
      correct: 1,
      level: "B1"
    },
    // B2 - Intermediário Superior (15-17)
    {
      id: 15,
      question: "By the time we arrived, the movie ___.",
      options: ["started", "has started", "had started", "was starting"],
      correct: 2,
      level: "B2"
    },
    {
      id: 16,
      question: "She ___ working here for 10 years next month.",
      options: ["will be", "will have been", "is", "has been"],
      correct: 1,
      level: "B2"
    },
    {
      id: 17,
      question: "The project, ___ was delayed, is now complete.",
      options: ["that", "which", "what", "who"],
      correct: 1,
      level: "B2"
    },
    // C1 - Avançado (18-20)
    {
      id: 18,
      question: "Had I known about the traffic, I ___ earlier.",
      options: ["would leave", "would have left", "left", "had left"],
      correct: 1,
      level: "C1"
    },
    {
      id: 19,
      question: "Not until he apologized ___ forgive him.",
      options: ["she did", "did she", "she would", "would she"],
      correct: 1,
      level: "C1"
    },
    {
      id: 20,
      question: "The evidence suggests that he ___ lying all along.",
      options: ["must be", "must have been", "should be", "could be"],
      correct: 1,
      level: "C1"
    }
  ]

  const handleAnswer = (answerIndex) => {
    const newAnswers = { ...answers, [currentQuestion]: answerIndex }
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResult = () => {
    let correctAnswers = 0
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correctAnswers++
      }
    })
    
    setScore(correctAnswers)
    const percentage = (correctAnswers / questions.length) * 100
    
    if (percentage >= 90) {
      setLevel({
        name: 'C1+ Avançado',
        verdict: '🚀 Está na hora de fazer imersão!',
        description: 'Você domina bem a gramática básica e intermediária. Agora o foco deve ser exposição massiva: séries, podcasts, conversas reais. A fluência vem com uso, não com mais estudo de regras.'
      })
    } else if (percentage >= 75) {
      setLevel({
        name: 'B2 Intermediário Superior',
        verdict: '📈 Bom progresso, mas ainda precisa consolidar',
        description: 'Você entende a maioria das estruturas, mas ainda erra em pontos importantes. Continue praticando com conteúdo real e revise os erros abaixo.'
      })
    } else if (percentage >= 60) {
      setLevel({
        name: 'B1 Intermediário',
        verdict: '⚠️ Precisa reforçar os conceitos',
        description: 'Você tem uma base, mas ainda comete erros em estruturas comuns. Revise gramática básica (tempos verbais, artigos, preposições) e aumente a exposição ao idioma.'
      })
    } else if (percentage >= 40) {
      setLevel({
        name: 'A2 Básico',
        verdict: '📚 Precisa melhorar os conceitos básicos',
        description: 'Você ainda está construindo a base. Foque no core vocabulary (500-1000 palavras mais usadas) e nas estruturas mais frequentes antes de avançar.'
      })
    } else {
      setLevel({
        name: 'A1 Iniciante',
        verdict: '🔄 Comece do básico',
        description: 'Você precisa construir uma base sólida. Comece com as 100 palavras mais frequentes, frases prontas do dia a dia e muita repetição. Não pule etapas.'
      })
    }
    
    setShowResult(true)
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setScore(0)
    setLevel('')
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    
    return (
      <div className="test-page">
        <div className="container">
          <div className="result-container">
            <h1 className="result-title">Resultado do Teste</h1>
            <div className="result-score">
              <div className="score-number">{score} / {questions.length}</div>
              <div className="score-percentage">{percentage}%</div>
            </div>
            <div className="result-level">
              <div className="level-badge">{level.name}</div>
              <div className="level-verdict">{level.verdict}</div>
              <p className="level-description">{level.description}</p>
            </div>

            <div className="answers-review">
              <h3>Revisão das Respostas</h3>
              <div className="answers-list">
                {questions.map((q, index) => {
                  const userAnswer = answers[index]
                  const isCorrect = userAnswer === q.correct
                  return (
                    <div key={q.id} className={`answer-item ${isCorrect ? 'correct' : 'wrong'}`}>
                      <div className="answer-question">
                        <span className="answer-number">{index + 1}.</span> {q.question}
                      </div>
                      <div className="answer-details">
                        <div className="your-answer">
                          <span className="answer-label">Sua resposta:</span>
                          <span className={isCorrect ? 'text-correct' : 'text-wrong'}>
                            {userAnswer !== undefined ? q.options[userAnswer] : '(não respondida)'}
                          </span>
                        </div>
                        {!isCorrect && (
                          <div className="correct-answer">
                            <span className="answer-label">Correta:</span>
                            <span className="text-correct">{q.options[q.correct]}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <button onClick={resetTest} className="btn-primary">
              Fazer Teste Novamente
            </button>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="test-page">
      <div className="container">
        <div className="test-container">
          <div className="test-header">
            <h1>Test English Level</h1>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="question-counter">
              Pergunta {currentQuestion + 1} de {questions.length}
            </p>
          </div>

          <div className="question-container">
            <h2 className="question-text">{currentQ.question}</h2>
            
            <div className="options-container">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${answers[currentQuestion] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="test-navigation">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="btn-secondary"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="btn-primary"
            >
              {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestEnglishLevel

