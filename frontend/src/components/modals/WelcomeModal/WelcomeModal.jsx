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
                <h1>
                    Welcome to Villagr!
                </h1>
                <p>
                    Click Explore to continue.
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