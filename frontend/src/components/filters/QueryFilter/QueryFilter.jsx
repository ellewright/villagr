import { useContext } from "react";
import styles from "./QueryFilter.module.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function QueryFilter({ query, setQuery }) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <form className={styles.form}>
            <select
                className={isDarkMode ? styles.dropdown : `${styles.dropdown} ${styles.light}`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            >
                <option value="">Filter by:</option>
                <option value="name">Name</option>
                <option value="job">Job</option>
                <option value="gender">Gender</option>
            </select>
        </form>
    )
}