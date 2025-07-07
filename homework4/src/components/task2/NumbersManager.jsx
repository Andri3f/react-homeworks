import NumberField from "./NumberField"
import Player from "./Player"
import { useMemo } from "react"
import styles from "./numbers-game.module.css"

function NumbersManager({ field, players, onGuessNumber, activePlayerId, loosePlayerId, startNewGame, allGuessedNumbers }) {
	let playersShow = null
	if (players.length > 0) {
		playersShow = players.map((player) => (
			<Player
				key={player.id}
				activePlayerId={activePlayerId}
				loosePlayerId={loosePlayerId}
				onGuessNumber={onGuessNumber}
				name={player.name}
				id={player.id}
				guessedNumbers={player.guessedNumbers}
				allGuessedNumbers={allGuessedNumbers}
			/>
		))
	} else {
		playersShow = <div>Немає гравців</div>
	}
	const isLoosePlayer = useMemo(() => {
		if (!loosePlayerId) return null
		return players.find((player) => player.id === loosePlayerId)
	}, [loosePlayerId])
	return (
		<div>
			<h5>
				Задача. Гра “Вгадай число”. Правила гри: 1) комп”ютер генерує трицифрове число; 2) кожен гравець по черзі задає цифру, якої ще не було (відсліковуємо, щоб цифри не повторювалися
				гравцями — не дозволяємо повторно ввести (блокуємо кнопку “Зробити хід”)). 3) якщо цифру вгадано, вона відображаться у полі гри “Число”; 4) програє той, хто вгадав останню цифру.
			</h5>
			<hr />
			<NumberField field={field} />
			{playersShow}
			<hr />
			{isLoosePlayer && (
				<div className={styles.looseMessage}>
					Гравець {isLoosePlayer.name} програв
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
