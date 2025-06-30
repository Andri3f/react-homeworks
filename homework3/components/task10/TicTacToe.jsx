import { useState } from "react"
import styles from "./tic-tac-toe.module.css"

function TicTacToe() {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [history, setHistory] = useState([Array(9).fill(null)])
	const [currentMove, setCurrentMove] = useState(true)
	const [gameResult, setGameResult] = useState(null)

	function checkWinner(boardToCheck) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		for (let line of lines) {
			const [a, b, c] = line
			if (boardToCheck[a] !== null && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
				return boardToCheck[a] ? "O" : "X"
			}
		}

		if (boardToCheck.every((cell) => cell !== null)) {
			return "draw"
		}

		return null
	}

	function handleClick(index) {
		if (board[index] !== null || gameResult) return

		const newBoard = board.map((cell, i) => (i === index ? currentMove : cell))
		setBoard(newBoard)
		setCurrentMove((prevMove) => !prevMove)

		const winner = checkWinner(newBoard)
		if (winner) {
			setGameResult(winner)
		}

		setHistory((prevHistory) => [...prevHistory, board])
	}

	function handleBack() {
		if (history.length > 1) {
			setBoard(history[history.length - 1])
			setHistory((prevHistory) => prevHistory.slice(0, -1))
			setCurrentMove((prevMove) => !prevMove)
			setGameResult(null)
		}
	}

	const getCellValue = (cell) => {
		if (cell === null) return null
		if (cell === true) return "O"
		return "X"
	}

	const getCellClass = (cell) => {
		if (cell === null) return styles.cell
		return `${styles.cell} ${cell === true ? styles.o : styles.x}`
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setHistory([Array(9).fill(null)])
		setCurrentMove(true)
		setGameResult(null)
	}

	return (
		<div className={styles.container}>
			<h4 className={styles.title}>Задача 10. Хрестики-нулики. З історією (можа повернутись назад)</h4>

			{gameResult && (
				<div className={styles.gameInfo}>
					{gameResult === "draw" ? "Нічия!" : `Переможець: ${gameResult}`}
					<button onClick={resetGame} className={styles.button}>
						Нова гра
					</button>
				</div>
			)}

			<div className={styles.board}>
				{board.map((cell, index) => (
					<div key={index} className={getCellClass(cell)} onClick={() => handleClick(index)}>
						{getCellValue(cell)}
					</div>
				))}
			</div>

			{history.length > 1 && (
				<button onClick={handleBack} className={`${styles.button} ${styles.secondary}`}>
					Назад
				</button>
			)}
		</div>
	)
}

export default TicTacToe
