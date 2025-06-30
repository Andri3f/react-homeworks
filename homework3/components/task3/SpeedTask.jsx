import { useState, useRef, useEffect, useMemo } from "react"
import styles from "./speedStyles.module.css"
function SpeedTask() {
	const currentSpeedRef = useRef(null)
	const [allowedSpeed, setAllowedSpeed] = useState(0)
	const [currentSpeed, setCurrentSpeed] = useState(0)
	const intervalId = useRef(null)
	const [warringBlink, setWarringBlink] = useState(false)
	function handleAllowedSpeedChange(e) {
		setAllowedSpeed(parseInt(e.target.value) || 0)
	}
	function handleCurrentSpeedChange(e) {
		setCurrentSpeed(parseInt(e.target.value) || 0)
	}
	const isWarning = allowedSpeed > 0 && currentSpeed > allowedSpeed * 0.9

	useEffect(() => {
		if (allowedSpeed > 0) {
			currentSpeedRef.current.disabled = false
		} else {
			currentSpeedRef.current.disabled = true
		}
		if (isWarning) {
			intervalId.current = setInterval(() => {
				setWarringBlink((prev) => !prev)
			}, 1000)
		} else {
			clearInterval(intervalId.current)
		}
		return () => clearInterval(intervalId.current)
	}, [allowedSpeed, currentSpeed])

	const colorClass = useMemo(() => {
		if (currentSpeed < allowedSpeed * 0.5) return styles.orange
		if (currentSpeed >= allowedSpeed * 0.5 && currentSpeed <= allowedSpeed) return styles.green
		if (currentSpeed > allowedSpeed) return styles.red
		return ""
	}, [currentSpeed, allowedSpeed])
	return (
		<div>
			<h5>
				Задача 3. Вводиться дозволена швидкість і поточна швидкість авто. Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований. Якщо швидкість менше 50%
				дозволеної, то колір input – оранжевий, якщо від 50% до 100% - зелений, вище 100% - червоний. Якщо значення вище 90% починає блимати повідомлення «Увага!»
			</h5>
			<hr />
			<input type="number" placeholder="enter speed" onChange={handleAllowedSpeedChange} />
			<input type="number" className={colorClass} ref={currentSpeedRef} placeholder="enter speed" onChange={handleCurrentSpeedChange} />
			{isWarning && <p className={warringBlink ? "" : styles.hideWarning}>Увага!</p>}
		</div>
	)
}

export default SpeedTask
