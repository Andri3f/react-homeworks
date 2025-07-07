function ResultsSection({ tasks }) {
	return (
		<div>
			{tasks.map((task) => (
				<div key={task.id}>
					{task.firstNumber} + {task.secondNumber} = {task.answer}
					ваша відповідь: {task.userAnswer} - {task.isUserAnswerCorrect ? "Правильно" : "Неправильно"}
				</div>
			))}
		</div>
	)
}

export default ResultsSection
