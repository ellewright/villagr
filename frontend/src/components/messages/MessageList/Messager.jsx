import { useEffect, useState } from "react";
import styles from "./Messager.module.css";

export default function Messager({ villager, job, trades }) {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (villager.name !== undefined) {
            setMessages(prev => [...prev, {
                id: crypto.randomUUID(),
                author: villager.name,
                message: `Hello, I'm ${villager.name}!`
            }, {
                id: crypto.randomUUID(),
                author: villager.name,
                message: `We're working on my communication skills. 
                Right now, you can ask about my NAME, GENDER, JOB, or TRADES!`
            }]);
        }
    }, [villager]);

    function handleSubmit(e) {
        e.preventDefault();

        const villagerResponse = getVillagerResponse(newMessage, trades);

        setMessages((prev) => [...prev, {
            id: crypto.randomUUID(),
            author: "User",
            message: newMessage
        }, {
            id: crypto.randomUUID(),
            author: villager.name,
            message: villagerResponse
        }]);

        setNewMessage("");
    }

    function getVillagerResponse(request, trades) {
        switch (request.toUpperCase()) {
            case "NAME":
                return `My name is ${villager.name}; nice to meet you!`;
            case "GENDER":
                return `I am a ${villager.gender}.`;
            case "JOB":
                return `I am a ${job.title}.`;
            case "TRADES":
                return `Okay, here's what I have so far:
                ${trades.map(trade => {
                    return ` ${trade.bidQuantity} ${trade.bid} for ${trade.askQuantity} ${trade.ask}`
                })}`;
            default:
                return `Hmm, I couldn't understand that!`;
        }
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