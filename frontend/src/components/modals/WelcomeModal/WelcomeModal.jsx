import { createPortal } from "react-dom";
import styles from "./WelcomeModal.module.css";
import { useState } from "react";

export default function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(true);

    if (isOpen) {
        return createPortal(
            <div className={styles.modal}>
                <h1>
                    Welcome to Villagr!
                </h1>
                <p>
                    Click Explore to continue.
                </p>
                <button
                    className={styles.button}
                    onClick={() => setIsOpen(false)}
                >
                    Explore
                </button>
            </div>,
            document.querySelector("#modals")
        );
    }
}