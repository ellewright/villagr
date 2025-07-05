import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { fetchVillagers } from "./api/villager";
import { fetchJobs } from "./api/job";

function App() {
  const [villagers, setVillagers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadVillagerData() {
      const data = await fetchVillagers();
      setVillagers(data);
    }

    async function loadJobData() {
      const data = await fetchJobs();
      setJobs(data);
    }

    loadVillagerData();
    loadJobData();
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
          ))}
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  )
}

export default App;