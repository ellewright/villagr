import { useState } from "react";
import { fetchVillagers, fetchVillagersByNameStartingWith } from "../../../api/villager";
import styles from "./NameFilter.module.css";

export default function NameFilter({ setVillagers }) {
    const [name, setName] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

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
                className={styles.input}
                onChange={(e) => setName(e.target.value)}
                type="text"
            />
            <button
                className={styles.submit}
                type="submit"
            >
                Filter
            </button>
        </form>
    )
}