import { useState } from "react";
import { fetchVillagers, fetchVillagersByGender } from "../../../api/villager";
import styles from "./GenderFilter.module.css";

export default function GenderFilter({ setVillagers }) {
    const [gender, setGender] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

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
                className={styles.dropdown}
                onChange={(e) => setGender(e.target.value)}
            >
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button
                className={styles.submit}
                type="submit"
            >
                Filter
            </button>
        </form>
    )
}