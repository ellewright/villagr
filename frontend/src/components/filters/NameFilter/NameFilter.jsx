import { useContext, useRef } from "react";
import { fetchVillagers, fetchVillagersByNameStartingWith } from "../../../api/villager";
import styles from "./NameFilter.module.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function NameFilter({ setVillagers }) {
    const nameRef = useRef();
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    async function handleSubmit(e) {
        e.preventDefault();
        const name = nameRef.current.value;

        if (name !== "") {
            const data = await fetchVillagersByNameStartingWith(name);
            setVillagers(data);
        } else {
            const data = await fetchVillagers();
            setVillagers(data);
        }
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <input
                className={isDarkMode ? styles.input : `${styles.input} ${styles.light}`}
                ref={nameRef}
                type="text"
            />
            <button className={isDarkMode ? styles.submit : `${styles.submit} ${styles.light}`}>
                Filter
            </button>
        </form>
    )
}