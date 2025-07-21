import { useState, useEffect, useMemo } from "react"
import GameBoard from "./GameBoard"
import styles from "./numbers-game.module.css"

function NumbersManager() {
	const [numberFields, setNumberFields] = useState([
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

		const isNumberAlreadyGuessed = players.some((player) => player.guessedNumbers.includes(userGuessNumber))

		if (isNumberAlreadyGuessed) {
			return
		}

		let isUserGuessedNumber = false
		setNumberFields((prevNumberFields) =>
			prevNumberFields.map((fieldItem) => {
				if (fieldItem.number === userGuessNumber) {
					isUserGuessedNumber = true
					return { ...fieldItem, isOpen: true }
				}
				return fieldItem
			})
		)

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

		setPlayerIndex((prevIndex) => (prevIndex + 1) % players.length)
	}

	function startNewGame() {
		setNumberFields(numberFields.map((f) => ({ ...f, isOpen: false })))
		setPlayers(players.map((p) => ({ ...p, guessedNumbers: [] })))
		setLoosePlayerId(null)
		setPlayerIndex(0)
	}

	useEffect(() => {
		const finished = numberFields.every((f) => f.isOpen)
		if (finished) {
			const loserIndex = (activePlayerIndex - 1 + players.length) % players.length
			setLoosePlayerId(players[loserIndex].id)
		}
	}, [numberFields, activePlayerIndex, players])

	const activePlayerId = players[activePlayerIndex].id

	const getAllGuessedNumbers = () => {
		return players.flatMap((player) => player.guessedNumbers)
	}

	const loosePlayer = useMemo(() => {
		if (!loosePlayerId) return null
		return players.find((player) => player.id === loosePlayerId)
	}, [loosePlayerId, players])

	return (
		<div>
			<h5>
				Задача. Гра "Вгадай число". Правила гри: 1) комп"ютер генерує трицифрове число; 2) кожен гравець по черзі задає цифру, якої ще не було (відсліковуємо, щоб цифри не повторювалися
				гравцями — не дозволяємо повторно ввести (блокуємо кнопку "Зробити хід")). 3) якщо цифру вгадано, вона відображаться у полі гри "Число"; 4) програє той, хто вгадав останню цифру.
			</h5>
			<hr />
			<GameBoard
				numberFields={numberFields}
				players={players}
				onGuessNumber={onGuessNumber}
				activePlayerId={activePlayerId}
				loosePlayerId={loosePlayerId}
				allGuessedNumbers={getAllGuessedNumbers()}
			/>
			<hr />
			{loosePlayer && (
				<div className={styles.looseMessage}>
					Гравець {loosePlayer.name} програв
					<div>
						<button className={styles.newGameButton} onClick={startNewGame}>
							Почати нову гру
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default NumbersManager
