import styles from "./messages.module.css"

function Message({ id, message, likes, dislikes, onLike, onDislike }) {
	return (
		<div className={styles.messageCard}>
			<div className={styles.messageContent}>
				<p className={styles.messageText}>{message}</p>
				<div className={styles.buttonGroup}>
					<button onClick={() => onLike(id)} className={styles.likeButton}>
						Like
					</button>
					<button onClick={() => onDislike(id)} className={styles.dislikeButton}>
						Dislike
					</button>
				</div>
			</div>
			<div className={styles.stats}>
				<span className={styles.statItem}>
					<strong>{likes}</strong> likes
				</span>
				<span className={styles.statItem}>
					<strong>{dislikes}</strong> dislikes
				</span>
			</div>
		</div>
	)
}

export default Message
