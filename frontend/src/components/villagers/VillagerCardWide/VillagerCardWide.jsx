import { useEffect, useState } from "react"
import styles from "./VillagerCardWide.module.css"
import { fetchJobs } from "../../../api/job";

export default function VillagerCardWide({ villager }) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function loadJobData() {
            const data = await fetchJobs();
            setJobs(data);
        }

        loadJobData()
    }, [])

    return (
        <div
            key={villager.id}
            className={styles.villager}
        >
            <div className={styles.villagerTitle}>
                <h3 className={styles.villagerName}>
                    {villager.name}
                </h3>
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
    )
}