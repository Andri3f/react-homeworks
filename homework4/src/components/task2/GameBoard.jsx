import NumberField from "./NumberField"
import Player from "./Player"
import styles from "./numbers-game.module.css"

function GameBoard({ numberFields, players, onGuessNumber, activePlayerId, loosePlayerId, allGuessedNumbers }) {
	const playersShow =
		players.length > 0 ? (
			players.map((player) => (
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
		) : (
			<div>Немає гравців</div>
		)

	return (
		<div className={styles.gameBoard}>
			<NumberField numberFields={numberFields} />
			<div className={styles.playersContainer}>{playersShow}</div>
		</div>
	)
}

export default GameBoard
