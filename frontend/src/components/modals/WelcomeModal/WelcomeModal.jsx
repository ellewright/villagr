import { createPortal } from "react-dom";
import styles from "./WelcomeModal.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(true);

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    if (isOpen) {
        return createPortal(
            <div className={isDarkMode ? styles.modal : `${styles.modal} ${styles.light}`}>
                <h1 className={styles.title}>
                    Welcome to <span>Villagr</span>!
                </h1>
                <p className={styles.subtitle}>
                    Click <span>Explore</span> to continue.
                </p>
                <button
                    className={isDarkMode ? styles.button : `${styles.button} ${styles.light}`}
                    onClick={() => setIsOpen(false)}
                >
                    Explore
                </button>
            </div>,
            document.querySelector("#modals")
        );
    }
}