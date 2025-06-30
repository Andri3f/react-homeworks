import styles from "./dance-couples.module.css"
import { useState } from "react"

function DanceCouples() {
	const [boys, setBoys] = useState([
		{ id: 1, name: "John", isSelected: false },
		{ id: 2, name: "Ostap", isSelected: false },
		{ id: 3, name: "Dmytro", isSelected: false },
		{ id: 4, name: "Vlad", isSelected: false },
		{ id: 5, name: "Yura", isSelected: false },
	])
	const [girls, setGirls] = useState([
		{ id: 1, name: "Jane", isSelected: false },
		{ id: 2, name: "Liza", isSelected: false },
		{ id: 3, name: "Nastya", isSelected: false },
	])
	const [selectedBoyId, setSelectedBoyId] = useState(null)
	const [selectedGirlId, setSelectedGirlId] = useState(null)
	const [couples, setCouples] = useState([])

	const getBoyClassName = (boyId) => {
		return `${styles.listItem} ${selectedBoyId === boyId ? styles.selected : ""}`
	}

	const getGirlClassName = (girlId) => {
		return `${styles.listItem} ${selectedGirlId === girlId ? styles.selected : ""}`
	}

	const handleAddCouple = () => {
		const newCouple = {
			id: Date.now(),
			boyId: selectedBoyId,
			girlId: selectedGirlId,
		}
		setCouples((prevCouples) => [...prevCouples, newCouple])
		setBoys((prevBoys) => prevBoys.map((boy) => (boy.id === selectedBoyId ? { ...boy, isSelected: true } : boy)))
		setGirls((prevGirls) => prevGirls.map((girl) => (girl.id === selectedGirlId ? { ...girl, isSelected: true } : girl)))
		setSelectedBoyId(null)
		setSelectedGirlId(null)
	}

	const getBoyName = (boyId) => {
		const boy = boys.find((b) => b.id === boyId)
		return boy ? boy.name : ""
	}

	const getGirlName = (girlId) => {
		const girl = girls.find((g) => g.id === girlId)
		return girl ? girl.name : ""
	}

	return (
		<div className={styles.container}>
			<h5 className={styles.title}>
				Задача 6. Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо у обрані пари. Пару можна видалити. Поки не вибрано хлопця і дівчину кнопка «Додати» заблокована. Якщо не
				вистачає хлопців або дівчат вибір також блокується.
			</h5>
			<hr className={styles.divider} />
			<div className={styles.content}>
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Boys</h3>
					<ul>
						{boys.map((boy) =>
							!boy.isSelected ? (
								<li key={boy.id} className={getBoyClassName(boy.id)} onClick={() => setSelectedBoyId(boy.id)}>
									{boy.name}
								</li>
							) : null
						)}
					</ul>
				</div>
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Girls</h3>
					<ul className={styles.list}>
						{girls.map((girl) =>
							!girl.isSelected ? (
								<li key={girl.id} className={getGirlClassName(girl.id)} onClick={() => setSelectedGirlId(girl.id)}>
									{girl.name}
								</li>
							) : null
						)}
					</ul>
				</div>
			</div>
			<button disabled={!selectedBoyId || !selectedGirlId} className={styles.addButton} onClick={handleAddCouple}>
				Add
			</button>
			<div className={styles.couples}>
				{couples.map((couple) => (
					<div key={couple.id} className={styles.couple}>
						{getBoyName(couple.boyId)} / {getGirlName(couple.girlId)}
					</div>
				))}
			</div>
		</div>
	)
}

export default DanceCouples
