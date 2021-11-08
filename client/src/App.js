import React, { useState } from 'react';
import { questions } from './questions';

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);
	const [isAnswered, setIsAnswered] = useState(false);
	
	const [score, setScore] = useState(0);

	const onAnswerClick = (option) => {
		setIsAnswered(true)
		if (option.isCorrect) {
			setIsCorrect(true)
			setScore(score + 1);
		}
	};

	const handleNavigation = ()=>{
		setIsAnswered(false)
		const nextQuestion = currentQuestion + 1;
				if (nextQuestion < questions.length) {
					setCurrentQuestion(nextQuestion);
				} else {
			setShowScore(true);
		}
	}
		

	console.log({isCorrect, isAnswered});
	return (
		<div className='app'>
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
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button disabled={isAnswered} key={answerOption.answerText} onClick={() => onAnswerClick(answerOption)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
			<button disabled={!isAnswered} onClick={()=>handleNavigation()}>Next</button>
		</div>
	);
}