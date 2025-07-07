import { useState, useEffect } from "react"
import MessageManager from "./components/task1/MessageManager"
import NumbersManager from "./components/task2/NumbersManager"
function App() {
	const [messages, setMessages] = useState([
		{ id: 1, message: "Hello everyone", likes: 0, dislikes: 0 },
		{ id: 2, message: "I like pizza", likes: 0, dislikes: 0 },
	])
	function onMessageAdd(message) {
		setMessages([...messages, { id: new Date().getTime(), message, likes: 0, dislikes: 0 }])
	}
	function onLike(id) {
		setMessages((prevMessages) => prevMessages.map((message) => (message.id === id ? { ...message, likes: message.likes + 1 } : message)))
	}
	function onDislike(id) {
		setMessages((prevMessages) => prevMessages.map((message) => (message.id === id ? { ...message, dislikes: message.dislikes + 1 } : message)))
	}
	//===============================================
	const [field, setField] = useState([
		{ index: 1, number: 1, isOpen: false },
		{ index: 2, number: 7, isOpen: false },
		{ index: 3, number: 9, isOpen: false },
		{ index: 4, number: 5, isOpen: false },
	])
	const [players, setPlayers] = useState([
		{ id: 1, name: "Player 1", guessedNumbers: [] },
		{ id: 2, name: "Player 2", guessedNumbers: [] },
	])
	const [loosePlayerId, setLoosePlayerId] = useState(null)
	const [activePlayerIndex, setPlayerIndex] = useState(0)

	function onGuessNumber(id, userGuessNumber) {
		if (loosePlayerId) return

		// Перевіряємо, чи число вже було відгадане будь-яким гравцем
		const isNumberAlreadyGuessed = players.some((player) => player.guessedNumbers.includes(userGuessNumber))

		if (isNumberAlreadyGuessed) {
			return // Не дозволяємо повторно ввести вже відгадане число
		}

		let isUserGuessedNumber = false
		setField((prevField) =>
			prevField.map((fieldItem) => {
				if (fieldItem.number === userGuessNumber) {
					isUserGuessedNumber = true
					return { ...fieldItem, isOpen: true }
				}
				return fieldItem
			})
		)

		// Якщо число відгадане, додаємо його до списку відгаданих чисел активного гравця
		if (isUserGuessedNumber) {
			setPlayers((prevPlayers) =>
				prevPlayers.map((player) => {
					if (player.id === id) {
						return { ...player, guessedNumbers: [...player.guessedNumbers, userGuessNumber] }
					}
					return player
				})
			)
		}

		// Завжди переключаємо гравця після ходу
		setPlayerIndex((prevIndex) => (prevIndex + 1) % players.length)
	}
	function startNewGame() {
		setField(field.map((f) => ({ ...f, isOpen: false })))
		setPlayers(players.map((p) => ({ ...p, guessedNumbers: [] })))
		setLoosePlayerId(null)
		setPlayerIndex(0)
	}
	useEffect(() => {
		const finished = field.every((f) => f.isOpen)
		if (finished) {
			const loserIndex = (activePlayerIndex - 1 + players.length) % players.length
			setLoosePlayerId(players[loserIndex].id)
		}
	}, [field])

	const activePlayerId = players[activePlayerIndex].id

	// Функція для отримання всіх відгаданих чисел
	const getAllGuessedNumbers = () => {
		return players.flatMap((player) => player.guessedNumbers)
	}

	return (
		<>
			<div>
				<MessageManager listOfMessages={messages} onLike={onLike} onDislike={onDislike} onMessageAdd={onMessageAdd} />
				<hr />

				<NumbersManager
					field={field}
					activePlayerId={activePlayerId}
					loosePlayerId={loosePlayerId}
					startNewGame={startNewGame}
					onGuessNumber={onGuessNumber}
					players={players}
					allGuessedNumbers={getAllGuessedNumbers()}
				/>
			</div>
		</>
	)
}

export default App
