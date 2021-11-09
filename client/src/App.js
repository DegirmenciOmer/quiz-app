import React, { useState } from 'react'
import MultipleOptions from './components/MultipleOptions'
import { questions } from './questions'

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [intro, setIntro] = useState(true)

  console.log({ isAnswered })
  console.log({ isCorrect })
  console.log({ currentQuestion })
  console.log(questions.length)
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
      {intro ? (
        <div>
          <h4>
            First study
            <a
              style={{ color: '#7cc6fe', margin: '0 3px ' }}
              target='_blank'
              href='https://learningenglish.voanews.com/a/lets-learn-english-level-2-lesson-2/3960471.html'
            >
              this lesson
            </a>
            and then start the test.
          </h4>
          <button
            style={{
              margin: 'auto',
              backgroundColor: 'green',
              padding: '12px',
            }}
            onClick={() => setIntro(false)}
          >
            Start!
          </button>
        </div>
      ) : currentQuestion > questions.length - 1 ? (
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
          <MultipleOptions
            isAnswered={isAnswered}
            setIsAnswered={setIsAnswered}
            isCorrect={isCorrect}
            setIsCorrect={setIsCorrect}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setScore={setScore}
            score={score}
          />
        </>
      )}
    </div>
  )
}
