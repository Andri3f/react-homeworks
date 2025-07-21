import { useState } from "react"
import MessagesLIst from "./MessagesLIst"
import MessageForm from "./MessageForm"
import styles from "./messages.module.css"

function MessageManager() {
	const [messages, setMessages] = useState([
		{ id: 1, message: "Hello everyone", likes: 0, dislikes: 0 },
		{ id: 2, message: "I like pizza", likes: 0, dislikes: 0 },
	])

	function onMessageAdd(message) {
		setMessages([...messages, { id: new Date().getTime(), message, likes: 0, dislikes: 0 }])
	}

	function onLike(id) {
		setMessages((prevMessages) => prevMessages.map((message) => (message.id === id ? { ...message, likes: message.likes + 1 } : message)))
	}

	function onDislike(id) {
		setMessages((prevMessages) => prevMessages.map((message) => (message.id === id ? { ...message, dislikes: message.dislikes + 1 } : message)))
	}

	return (
		<div className={styles.container}>
			<h5 className={styles.title}>Приклад. Створити імітатор мессенджера. Є можлиість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).</h5>
			<hr />
			<h1 className={styles.title}> Message Board</h1>
			<MessagesLIst listOfMessages={messages} onLike={onLike} onDislike={onDislike} />
			<MessageForm onMessageAdd={onMessageAdd} />
		</div>
	)
}

export default MessageManager
