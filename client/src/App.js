import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'the skill, system, or job of keeping the financial records of a business or person',
			answerOptions: [
				{ answerText: 'boss', isCorrect: false },
				{ answerText: 'accounting', isCorrect: true },
				{ answerText: 'criminal', isCorrect: false },
			],
		},
		{
			questionText: 'the person whose job is to tell other workers what to do ',
			answerOptions: [
        { answerText: 'accounting', isCorrect: false },
				{ answerText: 'criminal', isCorrect: false },
				{ answerText: 'fire', isCorrect: false },
				{ answerText: 'boss', isCorrect: true },
			],
		},
		{
			questionText: 'not angry, upset, excited, etc',
			answerOptions: [
        { answerText: 'videographer', isCorrect: false },
				{ answerText: 'calm', isCorrect: true },
				{ answerText: 'rumor', isCorrect: false },
				{ answerText: 'fire', isCorrect: false },
			],
		},
		{
			questionText: 'an amount of money available for spending that is based on a plan for how it will be spent ',
			answerOptions: [
        { answerText: 'update', isCorrect: false },
				{ answerText: 'scare', isCorrect: false },
				{ answerText: 'fire', isCorrect: false },
				{ answerText: 'budget', isCorrect: true },
			],
		},
		{
			questionText: 'a person who has committed a crime or who has been proven to be guilty of a crime by a court ',
			answerOptions: [
        { answerText: 'update', isCorrect: false },
				{ answerText: 'scare', isCorrect: false },
				{ answerText: 'criminal', isCorrect: true },
				{ answerText: 'fire', isCorrect: false },
			],
		},
		{
			questionText: 'a police offi cer whose job is to fi nd information about crimes that have occurred and to catch criminals',
			answerOptions: [
				{ answerText: 'detective', isCorrect: true },
				{ answerText: 'update', isCorrect: false },
				{ answerText: 'criminal', isCorrect: false },
				{ answerText: 'budget', isCorrect: false },
			],
		},
		{
			questionText: 'to dismiss (someone) from a job ',
			answerOptions: [
				{ answerText: 'budget', isCorrect: false },
				{ answerText: 'reset', isCorrect: false },
				{ answerText: 'scare', isCorrect: false },
				{ answerText: 'fire', isCorrect: true },
			],
		},
		{
			questionText: 'information or a story that is passed from person to person but has not been proven to be true',
			answerOptions: [
				{ answerText: 'rumor', isCorrect: true },
				{ answerText: 'update', isCorrect: false },
				{ answerText: 'scare', isCorrect: false },
				{ answerText: 'fire', isCorrect: false },
			],
		},
		{
			questionText: 'to cause (someone) to become afraid',
			answerOptions: [
				{ answerText: 'climb', isCorrect: false },
				{ answerText: 'update', isCorrect: false },
				{ answerText: 'scare', isCorrect: true },
				{ answerText: 'fire', isCorrect: false },
			],
		},
		{
			questionText: ' to change (something) by including the most recent information',
			answerOptions: [
				{ answerText: 'budget', isCorrect: false },
				{ answerText: 'fire', isCorrect: false },
				{ answerText: 'scare', isCorrect: false },
				{ answerText: 'update', isCorrect: true },
			],
		},
		{
			questionText: 'a person who records images or events using a video camera',
			answerOptions: [
				{ answerText: 'budget', isCorrect: false },
				{ answerText: 'videographer', isCorrect: true },
				{ answerText: 'e-mail', isCorrect: false },
				{ answerText: 'dry', isCorrect: false },
			],
		},
		{
			questionText: 'to talk about the personal lives of other people',
			answerOptions: [
				{ answerText: 'budget', isCorrect: false },
				{ answerText: 'e-mail', isCorrect: false },
				{ answerText: 'dry', isCorrect: false },
				{ answerText: 'gossip', isCorrect: true },
			],
		},
		{
			questionText: 'used as an angry way to tell someone to leave, (def ol)',
			answerOptions: [
				{ answerText: 'come on', isCorrect: false },
				{ answerText: 'get out', isCorrect: true },
				{ answerText: 'help me', isCorrect: false },
				{ answerText: 'kick out', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}