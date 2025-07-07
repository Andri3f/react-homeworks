import { useState } from "react"
import styles from "./numbers-game.module.css"
function Player({ name, id, guessedNumbers, onGuessNumber, activePlayerId, loosePlayerId, allGuessedNumbers }) {
	const [userGuessNumber, setUserGuessNumber] = useState("")

	const handleGuess = () => {
		if (userGuessNumber.trim() === "") {
			alert("Введіть число!")
			return
		}

		const number = parseInt(userGuessNumber)
		if (isNaN(number) || number < 0 || number > 9) {
			alert("Введіть число від 0 до 9!")
			return
		}

		onGuessNumber(id, number)
		setUserGuessNumber("")
	}

	const isNumberAlreadyGuessed = userGuessNumber && allGuessedNumbers.includes(parseInt(userGuessNumber))

	const isButtonDisabled = activePlayerId !== id || loosePlayerId || isNumberAlreadyGuessed

	return (
		<div className={styles.player}>
			<h5 className={styles.playerName}>{name}</h5>
			<div className={styles.inputGroup}>
				<label>Цифра:</label>
				<input className={styles.numberInput} type="number" min="0" max="9" value={userGuessNumber} onChange={(e) => setUserGuessNumber(e.target.value)} />
			</div>
			<button className={styles.guessButton} onClick={handleGuess} disabled={isButtonDisabled}>
				зробити хід
			</button>
			{isNumberAlreadyGuessed && userGuessNumber && <div className={styles.errorMessage}>Це число вже було відгадане!</div>}
			<div className={styles.guessedNumbers}>відгадані цифри: {guessedNumbers.length > 0 ? guessedNumbers.join(", ") : "поки немає"}</div>
		</div>
	)
}

export default Player
