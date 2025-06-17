import { useState } from "react"
import LoginTask from "./components/task1/LoginTask"
import FlySits from "./components/task2/FlySits"
import EanglishWordChecker from "./components/task3/EanglishWordChecker"
import SalaryList from "./components/task4/SalaryList"
import SitesList from "./components/task5/sitesList"
import RestaurantManager from "./components/task6/RestaurantManager"
const tasks = [
	{
		id: 1,
		title: "task1",
	},
	{
		id: 2,
		title: "task2",
	},
	{
		id: 3,
		title: "task3",
	},
	{
		id: 4,
		title: "task4",
	},
	{
		id: 5,
		title: "task5",
	},
	{
		id: 6,
		title: "task6",
	},
]
function App() {
	const [activeTask, setActiveTask] = useState(1)
	const getTask = () => {
		switch (activeTask) {
			case 1:
				return <LoginTask />
			case 2:
				return <FlySits />
			case 3:
				return <EanglishWordChecker />
			case 4:
				return <SalaryList />
			case 5:
				return <SitesList />
			case 6:
				return <RestaurantManager />
		}
	}
	return (
		<>
			<div className="tasks-buttons">
				{tasks.map((task) => (
					<button key={task.id} className={`tasks-buttons__button ${activeTask === task.id ? "active" : ""}`} onClick={() => setActiveTask(task.id)}>
						{task.title}
					</button>
				))}
			</div>
			<div className="tasks-content">{getTask()}</div>
		</>
	)
}

export default App
