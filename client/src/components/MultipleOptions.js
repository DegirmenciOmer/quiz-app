import React from 'react'
import { questions } from './../questions'

const MultipleOptions = ({
  isAnswered,
  setIsAnswered,
  setIsCorrect,
  currentQuestion,
  setCurrentQuestion,
  setScore,
  score,
}) => {
  const handleNavigation = () => {
    setIsAnswered(false)
    setIsCorrect(false)

    setCurrentQuestion(currentQuestion + 1)
  }

  const onAnswerClick = (option) => {
    setIsAnswered(true)
    if (option.isCorrect) {
      setIsCorrect(true)
      setScore(score + 1)
    }
  }
  console.log({ score })
  return (
    <div className='answer-section'>
      {questions[currentQuestion].answerOptions.map((answerOption) => (
        <button
          disabled={isAnswered}
          className={`${isAnswered && answerOption.isCorrect && 'correct'} ${
            isAnswered && !answerOption.isCorrect && 'incorrect'
          }`}
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
  )
}

export default MultipleOptions
