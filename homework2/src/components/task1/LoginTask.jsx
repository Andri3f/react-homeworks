import { useState } from "react"
import styles from "./loginTask.module.scss"
function LoginTask() {
	const users = [
		{
			id: 1,
			userName: "admin",
			password: "123456",
		},
		{
			id: 2,
			userName: "user",
			password: "12345",
		},
	]
	const [userData, setUserData] = useState({
		userName: "",
		password: "",
	})
	const [error, setError] = useState("")
	const [isIvan, setIsIvan] = useState(false)
	function handlerUserChange(e) {
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		})
	}
	function handleSubmit(e) {
		e.preventDefault()
		const user = users.find((user) => user.userName === userData.userName.trim() && user.password === userData.password)
		if (user) {
			setError("")
			setIsIvan(false)
			alert("Login successful")
			setUserData({
				userName: "",
				password: "",
			})
		} else {
			if (userData.userName.trim() === "Ivan") setIsIvan(true)
			else setIsIvan(false)

			setError("incorrect username or password")
		}
	}
	return (
		<div>
			<h5>
				Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то: 1) якщо логін = Іван – колір повідомлення про помилку синій 2) якщо хтось інший, то колір
				повідомлення червоний
			</h5>
			<form onSubmit={handleSubmit}>
				<input type="text" value={userData.userName} name="userName" onChange={handlerUserChange} placeholder="Username" />
				<input type="password" value={userData.password} name="password" onChange={handlerUserChange} placeholder="Password" />
				<button type="submit">Login</button>
			</form>
			{error && <span className={`${styles.error} ${isIvan ? styles["ivan-error"] : ""}`}>{error}</span>}
		</div>
	)
}

export default LoginTask
