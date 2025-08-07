import { useRef } from "react";
import { fetchVillagers, fetchVillagersByNameStartingWith } from "../../../api/villager";
import styles from "./NameFilter.module.css";

export default function NameFilter({ setVillagers }) {
    const nameRef = useRef();

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
                className={styles.input}
                ref={nameRef}
                type="text"
            />
            <button className={styles.submit}>
                Filter
            </button>
        </form>
    )
}