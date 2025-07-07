import { useState } from "react"
import styles from "./messages.module.css"

function MessageForm({ onMessageAdd }) {
	const [message, setMessage] = useState("")
	function onChange(event) {
		setMessage(event.target.value)
	}
	function onAdd() {
		if (message.trim()) {
			onMessageAdd(message)
			setMessage("")
		}
	}
	function handleKeyPress(event) {
		if (event.key === "Enter") {
			onAdd()
		}
	}
	return (
		<div className={styles.formContainer}>
			<h3 className={styles.formTitle}> Add New Message</h3>
			<div className={styles.formContent}>
				<input type="text" placeholder="Type your message here..." value={message} onChange={onChange} onKeyPress={handleKeyPress} className={styles.input} />
				<button onClick={onAdd} disabled={!message.trim()} className={styles.sendButton}>
					Send
				</button>
			</div>
		</div>
	)
}

export default MessageForm
