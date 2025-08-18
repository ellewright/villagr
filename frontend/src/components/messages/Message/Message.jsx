import styles from "./Message.module.css";

export default function Message({ author, body }) {
    return (
        <div
            className={`${styles.chat} 
                            ${author === "User"
                    ? styles.user
                    : styles.villager}`}
        >
            {author !== "User" && (
                <img
                    className={styles.chatImg}
                    src={`/${author}.png`}
                    alt="User profile picture."
                />
            )}
            <p className={`${styles.chatMessage} 
                                ${author === "User"
                    ? styles.user
                    : styles.villager}`}
            >
                {body}
            </p>
            {author === "User" && (
                <img
                    className={styles.chatImg}
                    src="/User.jpg"
                    alt="User profile picture."
                />
            )}
        </div>
    )
}