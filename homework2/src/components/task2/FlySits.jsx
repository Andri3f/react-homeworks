import { useEffect, useState } from "react"
import GetElementsToSelect from "./GetElementsToSelect"
import styles from "./flyTaskStyles.module.scss"

function FlySits() {
	const [flyClasses, setFlyClasses] = useState([])
	const [selectedFlyClass, setSelectedFlyClass] = useState(1)

	useEffect(() => {
		setFlyClasses([
			{
				name: "business",
				id: 1,
			},
			{
				name: "econom",
				id: 2,
			},
		])
	}, [])
	const onFlyClassChange = (e) => {
		setSelectedFlyClass(parseInt(e.target.value))
	}
	return (
		<div className={styles.container}>
			<h5>
				Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо 1) бізнес - виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску
				(так/ні)), на фоні зображення бізнес кают 2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.
			</h5>
			<hr />
			<select className={styles.select} onChange={onFlyClassChange}>
				{flyClasses.map((flyClass) => {
					return (
						<option key={flyClass.id} value={flyClass.id}>
							{flyClass.name}
						</option>
					)
				})}
			</select>
			<GetElementsToSelect contentId={selectedFlyClass} />
		</div>
	)
}

export default FlySits
