import styles from "./Messager.module.css";

export default function Messager({ villager }) {
    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatList}>
                <div className={`${styles.chat} ${styles.user}`}>
                    <p className={`${styles.chatMessage} ${styles.user}`}>
                        Hello!
                    </p>
                    <img
                        className={styles.chatImg}
                        src="/User.jpg"
                        alt="User profile picture."
                    />
                </div>
                <div className={`${styles.chat} ${styles.villager}`}>
                    <img
                        className={styles.chatImg}
                        src={`/${villager.name}.png`}
                        alt="Villager profile picture."
                    />
                    <p className={`${styles.chatMessage} ${styles.villager}`}>
                        Hello! How can I help you today?
                    </p>
                </div>
            </div>
            <form className={styles.newChatForm}>
                <input
                    className={styles.newChatInput}
                    type="text"
                />
                <button className={styles.newChatButton}>
                    Send
                </button>
            </form>
        </div>
    )
}