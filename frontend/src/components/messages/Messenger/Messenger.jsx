import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./Messenger.module.css";
import Message from "../Message/Message";
import { VillagerContext } from "../../../contexts/VillagerContext";

export default function Messager() {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const { villager, job, trades } = useContext(VillagerContext);
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        if (villager.name !== undefined) {
            setMessages(prev => [...prev, {
                id: crypto.randomUUID(),
                author: villager.name,
                body: `Hello, I'm ${villager.name}!`
            }, {
                id: crypto.randomUUID(),
                author: villager.name,
                body: `We're working on my communication skills. 
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
            body: newMessage
        }, {
            id: crypto.randomUUID(),
            author: villager.name,
            body: villagerResponse
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
                    <Message key={message.id} author={message.author} body={message.body} />
                ))}
            </div>
            <form
                className={styles.newChatForm}
                onSubmit={handleSubmit}
            >
                <input
                    className={isDarkMode ? styles.newChatInput : `${styles.newChatInput} ${styles.light}`}
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