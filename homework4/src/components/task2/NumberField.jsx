import styles from "./numbers-game.module.css"
function NumberField({ field }) {
	const getCardClass = (numberData) => {
		if (numberData.isOpen) {
			return styles.open
		}
		return styles.close
	}
	return (
		<div className={styles.fields}>
			{field.map((numberData) => (
				<div className={`${styles.field} ${getCardClass(numberData)}`} key={numberData.index}>
					{numberData.isOpen && <span>{numberData.number}</span>}
				</div>
			))}
		</div>
	)
}

export default NumberField
