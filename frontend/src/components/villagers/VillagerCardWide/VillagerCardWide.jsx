import { useContext, useEffect, useState } from "react"
import styles from "./VillagerCardWide.module.css"
import { fetchJobs } from "../../../api/job";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function VillagerCardWide({ villager }) {
    const [jobs, setJobs] = useState([]);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        async function loadJobData() {
            const data = await fetchJobs();
            setJobs(data);
        }

        loadJobData();
    }, [])

    return (
        <div
            key={villager.id}
            className={isDarkMode ? styles.villager : `${styles.villager} ${styles.light}`}
        >
            <div className={styles.villagerTitle}>
                <Link
                    className={isDarkMode ? styles.link : `${styles.link} ${styles.light}`}
                    to={`/${villager.name}`}
                >
                    <h3 className={styles.villagerName}>
                        {villager.name}
                    </h3>
                </Link>
                {
                    jobs.map((job) => {
                        if (job.id === villager.jobId) {
                            return (
                                <p
                                    className={styles.villagerJob}
                                    key={job.id}
                                >
                                    {job.title}
                                </p>
                            )
                        }
                    })
                }
            </div>
            <img
                src={`/${villager.name}.png`}
                className={styles.profilePicture}
                alt="Villager profile picture."
            />
        </div>
    );
}