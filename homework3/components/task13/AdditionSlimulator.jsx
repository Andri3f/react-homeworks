import { useState, useEffect, useRef } from "react"
import StartForm from "./StartForm"
import AnswerInput from "./AnswerInput"
import ResultsSection from "./ResultsSection"

const secondsBetweenTasks = 10
function AdditionSlimulator() {
	const [tasksCount, setTasksCount] = useState(0)
	const [tasks, setTasks] = useState([])
	const [isGameStarted, setIsGameStarted] = useState(false)
	const [userAnswer, setUserAnswer] = useState("")
	const [currentIndex, setCurrentIndex] = useState(0)
	const intervalRef = useRef(null)

	function getTaskObj() {
		const firstNumber = Math.floor(Math.random() * 100)
		const secondNumber = Math.floor(Math.random() * 100)
		return {
			id: Date.now(),
			firstNumber,
			secondNumber,
			answer: firstNumber + secondNumber,
		}
	}
	function startGame() {
		if (tasksCount <= 0) {
			alert("Введіть кількість прикладів")
			return
		}
		setIsGameStarted(true)
		setCurrentIndex(0)
		setTasks([])
		setUserAnswer("")
		const taskObj = getTaskObj()
		setTasks([taskObj])
	}
	function checkAnswer(correctAnswer, answer) {
		return Number(answer) === correctAnswer
	}

	function handleSubmitAnswer() {
		if (!userAnswer) return
		setTasks((prevTasks) =>
			prevTasks.map((task, index) => {
				if (index !== currentIndex) return task
				const isUserAnswerCorrect = checkAnswer(task.answer, userAnswer)
				return {
					...task,
					userAnswer,
					isUserAnswerCorrect,
				}
			})
		)
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
		if (currentIndex + 1 < tasksCount) {
			setCurrentIndex((prev) => prev + 1)
			const taskObj = getTaskObj()
			setTasks((prev) => [...prev, taskObj])
			setUserAnswer("")
		} else {
			setIsGameStarted(false)
			setUserAnswer("")
		}
	}

	useEffect(() => {
		if (isGameStarted && currentIndex < tasksCount) {
			intervalRef.current = setInterval(() => {
				setTasks((prevTasks) =>
					prevTasks.map((task, index) => {
						if (index !== currentIndex) return task
						const isUserAnswerCorrect = checkAnswer(task.answer, userAnswer)
						return {
							...task,
							userAnswer,
							isUserAnswerCorrect,
						}
					})
				)
				if (currentIndex + 1 < tasksCount) {
					setCurrentIndex((prev) => prev + 1)
					const taskObj = getTaskObj()
					setTasks((prev) => [...prev, taskObj])
					setUserAnswer("")
				} else {
					setIsGameStarted(false)
					setUserAnswer("")
					clearInterval(intervalRef.current)
				}
			}, secondsBetweenTasks * 1000)
			return () => clearInterval(intervalRef.current)
		}
	}, [isGameStarted, currentIndex, tasksCount, userAnswer])

	return (
		<div>
			<h5>
				Задача 13. Тренажер додавання. Вводимо загальну кількість прикладів і натискаємо на кнопку «Старт». Після запуску (натисканні на кнопку «Старт») кожні 10 секунд (10 секунд між
				завданнями) користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка. Формується список тих, які він відповів правильно, і які він відповів неправильно.
				Загальна кількість прикладів вводиться.
			</h5>

			<hr />
			<StartForm tasksCount={tasksCount} setTasksCount={setTasksCount} startGame={startGame} />
			{isGameStarted && <AnswerInput userAnswer={userAnswer} setUserAnswer={setUserAnswer} handleSubmitAnswer={handleSubmitAnswer} />}
			{!isGameStarted && tasks.length > 0 && <ResultsSection tasks={tasks} />}
		</div>
	)
}

export default AdditionSlimulator
