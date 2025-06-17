import { useEffect, useState } from "react"
import styles from "./flyTaskStyles.module.scss"

function GetElementsToSelect({ contentId }) {
	const [classesContent, setClassesContent] = useState([])
	const [selectedFlyItem, setSelectedFlyItem] = useState(null)
	useEffect(() => {
		setClassesContent([
			{
				titleId: 1,
				id: 1,
				imgSrc: "https://www.shutterstock.com/image-photo/handsome-businessman-wearing-elegant-suit-600nw-2466456349.jpg",
				content: [
					{
						title: "Газета",
						id: 1,
					},
					{
						title: "Коньяк",
						id: 2,
					},
				],
			},
			{
				titleId: 2,
				id: 2,
				imgSrc: "https://s1.travix.com/blog/ai/airplane-multiple-seats-medium.jpg",
				content: [
					{
						title: "Пиво",
						id: 1,
					},
					{
						title: "Чипсі",
						id: 2,
					},
				],
			},
		])
	}, [])
	const getContent = () => {
		const contentData = classesContent.find((item) => item.titleId === contentId)
		if (contentData) {
			return contentData
		}
		return []
	}
	const onSelectFlyItemChange = (e) => {
		const value = parseInt(e.target.value)
		const item = getContent().content.find((item) => item.id === value)
		setSelectedFlyItem(item)
		if (item.title.trim().toLocaleLowerCase() === "коньяк") {
			alert("Ви хочете закуску?")
		}
	}
	return (
		<div>
			<select className={styles.select} onChange={onSelectFlyItemChange}>
				{getContent()?.content?.map((item) => {
					return (
						<option key={item.id} value={item.id}>
							{item.title}
						</option>
					)
				})}
			</select>
			<div className={styles.imageContainer}>
				<img src={getContent().imgSrc} alt="" />
			</div>
		</div>
	)
}

export default GetElementsToSelect
