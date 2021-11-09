import React, { useState } from 'react'
import { questions } from './questions'

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  const [score, setScore] = useState(0)

  const onAnswerClick = (option) => {
    setIsAnswered(true)
    if (option.isCorrect) {
      setIsCorrect(true)
      setScore(score + 1)
    }
  }

  const handleNavigation = () => {
    setIsAnswered(false)
    setIsCorrect(false)
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }
  console.log({ isAnswered })
  console.log({ isCorrect })
  return (
    <div
      className={`${
        isAnswered && isCorrect
          ? 'success'
          : isAnswered && !isCorrect
          ? 'fail'
          : ''
      }  app`}
    >
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                disabled={isAnswered}
                className={`${
                  isAnswered && answerOption.isCorrect && 'correct'
                } ${isAnswered && !answerOption.isCorrect && 'incorrect'}`}
                key={answerOption.answerText}
                onClick={() => onAnswerClick(answerOption)}
              >
                {answerOption.answerText}
              </button>
            ))}
            {isAnswered && (
              <button
                style={{ width: '30%', marginTop: '15px', marginLeft: 'auto' }}
                onClick={() => handleNavigation()}
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
