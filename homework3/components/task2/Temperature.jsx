import { useState, useMemo } from "react"
import styles from "./temperature.module.css"

function Temperature() {
	const [temperature, setTemperature] = useState(0)
	const colorClass = useMemo(() => {
		if (temperature < 0) return styles["lower-zero"]
		if (temperature >= 0 && temperature <= 10) return styles["zero-ten"]
		if (temperature >= 11 && temperature <= 22) return styles["eleven-twenty-two"]
		if (temperature > 22) return styles["higher-twenty-two"]
		return ""
	})
	const handleTemperatureChange = (e) => {
		setTemperature(parseInt(e.target.value))
	}
	return (
		<div>
			<h5>
				Задача 2. З клавіатури вводиться температура. Змінювати колір фону у залежності від значення: менше нуля – білий від 0 до 10 – синій, від 11 до 22 – зелений вище 22 – червоний
				Реалізувати з класами і стилями.
			</h5>
			<hr />
			<input type="number" placeholder="enter temperature" className={`${styles["temp-input"]} ${colorClass}`} value={temperature} onChange={handleTemperatureChange} />
		</div>
	)
}

export default Temperature
