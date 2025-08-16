import { useState } from "react";
import styles from "./Messager.module.css";

export default function Messager({ villager }) {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            id: crypto.randomUUID(),
            author: villager.name,
            message: `Hello, I'm ${villager.name}!`
        }
    ]);

    function handleSubmit(e) {
        e.preventDefault();

        setMessages((prev) => [...prev, {
            id: crypto.randomUUID(),
            author: "User",
            message: newMessage
        }, {
            id: crypto.randomUUID(),
            author: villager.name,
            message: "We're working on building my communication skills. Stay tuned!"
        }]);

        setNewMessage("");
    }

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatList}>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`${styles.chat} 
                        ${message.author === "User"
                                ? styles.user
                                : styles.villager}`}
                    >
                        {message.author !== "User" && (
                            <img
                                className={styles.chatImg}
                                src={`/${villager.name}.png`}
                                alt="User profile picture."
                            />
                        )}
                        <p className={`${styles.chatMessage} 
                            ${message.author === "User"
                                ? styles.user
                                : styles.villager}`}
                        >
                            {message.message}
                        </p>
                        {message.author === "User" && (
                            <img
                                className={styles.chatImg}
                                src="/User.jpg"
                                alt="User profile picture."
                            />
                        )}
                    </div>
                ))}
            </div>
            <form
                className={styles.newChatForm}
                onSubmit={handleSubmit}
            >
                <input
                    className={styles.newChatInput}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className={styles.newChatButton}>
                    Send
                </button>
            </form>
        </div>
    );
}