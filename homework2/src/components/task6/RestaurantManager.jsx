import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import styles from "./RestaurantManager.module.scss"

function RestaurantManager() {
	const [waitingList, setWaitingList] = useState([])
	const [processingList, setProcessingList] = useState([])
	const [completedList, setCompletedList] = useState([])
	const [dish, setDish] = useState("")

	function handleChange(e) {
		setDish(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (dish) {
			setWaitingList([...waitingList, { id: uuidv4(), dishTitle: dish }])
			setDish("")
		}
	}

	function handleProcess(id) {
		const dish = waitingList.find((item) => item.id === id)
		if (dish) {
			setProcessingList((prev) => [...prev, dish])
			setWaitingList((prev) => prev.filter((item) => item.id !== id))
		}
	}

	function handleCompleteCooking(id) {
		const dish = processingList.find((item) => item.id === id)
		if (dish) {
			setCompletedList((prev) => [...prev, dish])
			setProcessingList((prev) => prev.filter((item) => item.id !== id))
		}
	}

	function handleCompleteServing(id) {
		setCompletedList((prev) => prev.filter((item) => item.id !== id))
	}

	return (
		<div className={styles["restaurant-manager"]}>
			<h5>
				Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список "Очікують на виконання", якщо повар береться робити — замовлення переходить у список "Виконуються",
				якщо замовлення виконано — переходить у список "Готові до виносу". Якщо натиснути на "Подано" - страва зникає з таблиці Підказка: тут треба зберігати 3 масиви страв ( waitingList,
				processingList, completedList)
			</h5>
			<hr />
			<div className={styles["restaurant-manager__form"]}>
				<form onSubmit={handleSubmit}>
					<input type="text" value={dish} onChange={handleChange} />
					<button type="submit">Додати</button>
				</form>
			</div>
			<div className={styles["restaurant-manager__lists"]}>
				<div className={styles["restaurant-manager__list"]}>
					<h3>Очікують на виконання</h3>
					<ul>
						{waitingList.map((item) => (
							<li key={item.id}>
								<span>{item.dishTitle}</span>
								<button onClick={() => handleProcess(item.id)}>Готувати</button>
							</li>
						))}
					</ul>
				</div>
				<div className={styles["restaurant-manager__list"]}>
					<h3>Виконуються</h3>
					<ul>
						{processingList.map((item) => (
							<li key={item.id}>
								<span>{item.dishTitle}</span>
								<button onClick={() => handleCompleteCooking(item.id)}>Приготовлено</button>
							</li>
						))}
					</ul>
				</div>
				<div className={styles["restaurant-manager__list"]}>
					<h3>Готові до винос</h3>
					<ul>
						{completedList.map((item) => (
							<li key={item.id}>
								<span>{item.dishTitle}</span>
								<button onClick={() => handleCompleteServing(item.id)}>Подано</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default RestaurantManager
