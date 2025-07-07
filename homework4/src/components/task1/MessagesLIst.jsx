import Message from "./Message"
import styles from "./messages.module.css"

function MessagesList({ listOfMessages, onLike, onDislike }) {
	let content = null
	if (listOfMessages.length === 0) {
		content = (
			<div className={styles.emptyState}>
				<p className={styles.emptyText}> No messages to show</p>
			</div>
		)
	} else {
		content = (
			<div className={styles.messagesContainer}>
				{listOfMessages.map((message) => (
					<Message {...message} key={message.id} onLike={onLike} onDislike={onDislike} />
				))}
			</div>
		)
	}
	return <div>{content}</div>
}

export default MessagesList
