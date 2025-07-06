import { useParams } from "react-router-dom";
import styles from "./VillagerPage.module.css";
import { useEffect, useState } from "react";
import { fetchJobs } from "../../api/job";
import { fetchVillagerById } from "../../api/villager";


export default function VillagerPage() {
    const { villagerId } = useParams();
    const [villager, setVillager] = useState({});
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function loadJobs() {
            const data = await fetchJobs();
            setJobs(data);
        }

        async function loadVillager(villagerId) {
            const data = await fetchVillagerById(villagerId);
            setVillager(data);
        }

        loadJobs();
        loadVillager(villagerId);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.name}>
                    <h1>
                        {villager.name}
                    </h1>
                </div>
            </div>
            <div className={styles.body}>
                <div>
                    <img
                        className={styles.profilePicture}
                        src={`/${villager.name}.png`}
                        alt={`${villager.name}'s profile picture.`}
                    />
                </div>
                <div className={styles.jobContainer}>
                    {/* This could probably be implemented better */}
                    {
                        jobs.map((job) => {
                            if (job.id == villager.jobId) {
                                return (
                                    <p key={job.id}>{job.title}</p>
                                )
                            }
                        })
                    }
                </div>
                <div className={styles.genderContainer}>
                    <p>{villager.gender}</p>
                </div>
            </div>
        </div>
    )
}