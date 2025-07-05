import { useEffect, useState } from "react";
import styles from "./HomePage.module.css"
import { fetchVillagers } from "../../api/villager";
import { fetchJobs } from "../../api/job";
import VillagerCardWide from "../../components/villagers/VillagerCardWide/VillagerCardWide";

export default function HomePage() {
    const [villagers, setVillagers] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function loadVillagerData() {
            const data = await fetchVillagers();
            setVillagers(data);
        }

        loadVillagerData();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>
                        Villagr
                    </h1>
                </div>
                <div className={styles.subtitle}>
                    <h2>
                        The social media application for Minecraft villagers.
                    </h2>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.villagerList}>
                    {villagers.map((villager) => (
                        <VillagerCardWide key={villager.id} villager={villager} />
                    ))}
                </div>
            </div>
            <div className={styles.footer}></div>
        </div>
    )
}