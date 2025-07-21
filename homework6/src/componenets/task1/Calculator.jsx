import { useState } from "react"
import ResultDisplay from "./ResultDisplay"
//Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo
//Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B.
// Також є окремий компонент ResultDisplay, який відображає A + B. Обгорніть ResultDisplay у React.memo().
// Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay.
// Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не коли змінюється інший
// незалежний стан у батьківському компоненті (наприклад, лічильник, що не впливає на A чи B).

const Calculator = () => {
	const [numberA, setNumberA] = useState(0)
	const [numberB, setNumberB] = useState(0)
	const [plusValue, setPlusValue] = useState(0)
	const handleNumberAChange = (e) => {
		setNumberA(e.target.value)
	}

	const handleNumberBChange = (e) => {
		setNumberB(e.target.value)
	}

	const sum = (parseFloat(numberA) || 0) + (parseFloat(numberB) || 0)

	return (
		<div>
			<button onClick={() => setPlusValue((p) => p + 1)}>+</button>
			<div>{plusValue}</div>
			<hr />
			<input type="number" value={numberA} onChange={handleNumberAChange} />
			<input type="number" value={numberB} onChange={handleNumberBChange} />

			<ResultDisplay sum={sum} />
		</div>
	)
}

export default Calculator
