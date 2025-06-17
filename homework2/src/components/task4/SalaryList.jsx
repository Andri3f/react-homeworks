import { useState } from "react"

function SalaryList() {
	const [salaryList, setSalaryList] = useState([
		{
			id: "111",
			name: "Іванов",
			salary: 10000,
		},
		{
			id: "3244",
			name: "Петров",
			salary: 20000,
		},
		{
			id: "2342",
			name: "Сидоров",
			salary: 50000,
		},
	])
	return (
		<div>
			<h5>4. Вивести список як маркований список з елементами у форматі (name: salary)</h5>
			<hr />
			<ul>
				{salaryList.map((salaryData) => (
					<li key={salaryData.id}>
						{salaryData.name}: {salaryData.salary}
					</li>
				))}
			</ul>
		</div>
	)
}

export default SalaryList
