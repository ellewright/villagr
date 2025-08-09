import { useContext } from "react";
import styles from "./PageContainer.module.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function PageContainer({ children }) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={isDarkMode ? styles.container : `${styles.container} ${styles.light}`}>
            {children}
        </div>
    )
}