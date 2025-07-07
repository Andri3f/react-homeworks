import MessagesLIst from "./MessagesLIst"
import MessageForm from "./MessageForm"
import styles from "./messages.module.css"

function MessageManager({ listOfMessages, onMessageAdd, onLike, onDislike }) {
	return (
		<div className={styles.container}>
			<h5 className={styles.title}>Приклад. Створити імітатор мессенджера. Є можлиість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).</h5>
			<hr />
			<h1 className={styles.title}> Message Board</h1>
			<MessagesLIst listOfMessages={listOfMessages} onLike={onLike} onDislike={onDislike} />
			<MessageForm onMessageAdd={onMessageAdd} />
		</div>
	)
}

export default MessageManager
