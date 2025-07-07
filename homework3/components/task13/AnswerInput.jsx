function AnswerInput({ userAnswer, setUserAnswer, handleSubmitAnswer }) {
	return (
		<div>
			<input type="number" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
			<button onClick={handleSubmitAnswer}>Відповісти</button>
		</div>
	)
}

export default AnswerInput
