function StartForm({ tasksCount, setTasksCount, startGame }) {
	return (
		<div>
			<input type="number" value={tasksCount} onChange={(e) => setTasksCount(e.target.value)} />
			<button onClick={startGame}>Старт</button>
		</div>
	)
}

export default StartForm
