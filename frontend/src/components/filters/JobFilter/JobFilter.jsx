import { useRef } from "react";
import { fetchVillagers, fetchVillagersByJobId } from "../../../api/villager";
import styles from "./JobFilter.module.css";
import { fetchJobByTitle } from "../../../api/job";

export default function JobFilter({ setVillagers }) {
    const titleRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        const title = titleRef.current.value;

        if (title !== "") {
            const jobData = await fetchJobByTitle(title);
            const villagersData = await fetchVillagersByJobId(jobData.id);

            setVillagers(villagersData);
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
                ref={titleRef}
            >
                <option value="">All</option>
                <option value="Butcher">Butcher</option>
                <option value="Fisherman">Fisherman</option>
                <option value="Toolsmith">Toolsmith</option>
                <option value="Farmer">Farmer</option>
                <option value="Fletcher">Fletcher</option>
                <option value="Cleric">Cleric</option>
                <option value="Librarian">Librarian</option>
                <option value="Leatherworker">Leatherworker</option>
                <option value="Cartographer">Cartographer</option>
                <option value="Armourer">Armourer</option>
                <option value="Weaponsmith">Weaponsmith</option>
                <option value="Shepherd">Shepherd</option>
                <option value="Mason">Mason</option>
            </select>
            <button className={styles.submit}>
                Filter
            </button>
        </form>
    )
}