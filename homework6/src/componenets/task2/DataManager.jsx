import { useEffect, useState, useDeferredValue, useMemo, useCallback } from "react"
import DataGrid from "./DataGrid"
import FilterComp from "./FilterComp"
import styles from "./DataGrid.module.css"
//Задача 2. Таблиця з фільтрацією та сортуванням, чутлива до UI
//Створіть компонент DataGrid (батьківський) та GridRow (дочірній).
//DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.
//GridRow (обгорнутий у React.memo) відображає один рядок даних.
//Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.
//Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.
//Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів, які передаються до дочірніх компонентів.
//Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.

function DataManager() {
	const [cars, setCars] = useState(() => [])
	const [errMessage, setErrMessage] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [searchName, setSearchName] = useState("")
	const [sortPriceType, setSortPriceType] = useState("increase")
	const [priceLimits, setPriceLimits] = useState(() => ({
		from: "",
		to: "",
	}))
	const deferredSearchName = useDeferredValue(searchName)
	const deferredSortPriceType = useDeferredValue(sortPriceType)
	const deferredPriceLimits = useDeferredValue(priceLimits)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				const res = await fetch("/data/cars_data.json")
				if (!res.ok) {
					setErrMessage("error loading data")
					throw new Error("error loading data")
				}
				const data = await res.json()

				setErrMessage(null)
				setCars(data)
			} catch (error) {
				console.error("Error getting data:", error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	const sortedData = useMemo(() => {
		return cars
			.filter((item) => {
				if (deferredSearchName) {
					const dataFullName = `${item.brand} ${item.model}`
					if (!dataFullName.toLowerCase().includes(deferredSearchName.toLowerCase())) {
						return false
					}
				}
				if (deferredPriceLimits.from) {
					if (item.price < Number(deferredPriceLimits.from)) {
						return false
					}
				}
				if (deferredPriceLimits.to) {
					if (item.price > Number(deferredPriceLimits.to)) {
						return false
					}
				}
				return true
			})
			.sort((a, b) => {
				if (deferredSortPriceType === "increase") {
					return a.price - b.price
				}
				return b.price - a.price
			})
	}, [cars, deferredSearchName, deferredSortPriceType, deferredPriceLimits])

	const handleSearchChange = useCallback((value) => {
		setSearchName(value)
	}, [])

	const handleSortChange = useCallback((value) => {
		setSortPriceType(value)
	}, [])

	const handlePriceLimitsChange = useCallback((name, value) => {
		setPriceLimits((prev) => ({
			...prev,
			[name]: value,
		}))
	}, [])

	return (
		<div>
			<FilterComp
				searchName={searchName}
				onSearchChange={handleSearchChange}
				sortPriceType={sortPriceType}
				onSortChange={handleSortChange}
				priceLimits={priceLimits}
				onPriceLimitsChange={handlePriceLimitsChange}
			/>
			{isLoading && <div className={styles.loading}>Loading...</div>}
			{errMessage && <div className={styles.error}>{errMessage}</div>}
			{!isLoading && !errMessage && <DataGrid data={sortedData} />}
		</div>
	)
}

export default DataManager
