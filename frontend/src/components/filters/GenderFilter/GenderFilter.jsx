import { useContext, useRef } from "react";
import { fetchVillagers, fetchVillagersByGender } from "../../../api/villager";
import styles from "./GenderFilter.module.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function GenderFilter({ setVillagers }) {
    const genderRef = useRef();
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    async function handleSubmit(e) {
        e.preventDefault();
        const gender = genderRef.current.value;

        if (gender !== "") {
            const data = await fetchVillagersByGender(gender);
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
            <select
                className={isDarkMode ? styles.dropdown : `${styles.dropdown} ${styles.light}`}
                ref={genderRef}
            >
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button className={isDarkMode ? styles.submit : `${styles.submit} ${styles.light}`}>
                Filter
            </button>
        </form>
    )
}