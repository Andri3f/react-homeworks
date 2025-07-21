import Calculator from "./componenets/task1/Calculator"
import DataManager from "./componenets/task2/DataManager.jsx"
import DeviceTypes from "./componenets/task3/DeviceTypes.jsx"
import SearchComp from "./componenets/task4/SearchComp.jsx"

function App() {
	return (
		<div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
			<div style={{ marginBottom: "40px", padding: "20px", border: "2px solid #e0e0e0", borderRadius: "8px" }}>
				<h2 style={{ marginBottom: "15px" }}>Task 1</h2>
				<Calculator />
			</div>

			<div style={{ marginBottom: "40px", padding: "20px", border: "2px solid #e0e0e0", borderRadius: "8px" }}>
				<h2 style={{ marginBottom: "15px" }}>Task 2</h2>
				<DataManager />
			</div>

			<div style={{ marginBottom: "40px", padding: "20px", border: "2px solid #e0e0e0", borderRadius: "8px" }}>
				<h2 style={{ marginBottom: "15px" }}>Task 3</h2>
				<DeviceTypes />
			</div>

			<div style={{ marginBottom: "40px", padding: "20px", border: "2px solid #e0e0e0", borderRadius: "8px" }}>
				<h2 style={{ marginBottom: "15px" }}>Task 4</h2>
				<SearchComp />
			</div>
		</div>
	)
}

export default App
