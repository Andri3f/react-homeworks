import { useState } from "react"
import useDebounce from "./useDebounce"
//Задача 4. useDebounce – відкладений виклик функції
//Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах.
// Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.
//Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, а з невеликою
//затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.

function SearchComp() {
	const [search, setSearch] = useState("")
	const products = [
		{ id: 1, name: "Bread" },
		{ id: 2, name: "Milk" },
		{ id: 3, name: "Eggs" },
		{ id: 4, name: "Cheese" },
		{ id: 5, name: "Butter" },
	]
	const debouncedSearch = useDebounce(search, 500)
	const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
	return (
		<div>
			<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
			<div style={{ marginTop: "10px" }}>
				<p>Search: "{search}"</p>
				<p>Debounced search: "{debouncedSearch}"</p>
			</div>
			<div style={{ marginTop: "20px" }}>
				{filteredProducts.length > 0 && (
					<ul>
						{filteredProducts.map((product) => (
							<li key={product.id}>{product.name}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default SearchComp
