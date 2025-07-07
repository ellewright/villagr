import { useParams } from "react-router-dom";
import styles from "./VillagerPage.module.css";
import { useEffect, useState } from "react";
import { fetchJobById } from "../../api/job";
import { fetchVillagerById } from "../../api/villager";
import { fetchTradesByVillagerId } from "../../api/trade";


export default function VillagerPage() {
    const { villagerId } = useParams();
    const [villager, setVillager] = useState({});
    const [trades, setTrades] = useState([]);
    const [job, setJob] = useState();

    useEffect(() => {
        async function loadVillager(villagerId) {
            const data = await fetchVillagerById(villagerId);
            setVillager(data);
        }

        async function loadTrades(villagerId) {
            const data = await fetchTradesByVillagerId(villagerId);
            setTrades(data);
        }

        loadVillager(villagerId);
        loadTrades(villagerId);
    }, [])

    useEffect(() => {
        async function loadJob(id) {
            const data = await fetchJobById(id);
            setJob(data);
        }

        if (villager && villager.jobId) {
            loadJob(villager?.jobId);
        }
    }, [villager])

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
                    <p>{job?.title}</p>
                </div>
                <div className={styles.genderContainer}>
                    <p>{villager.gender}</p>
                </div>
                <div className={styles.tradesContainer}>
                    <h2>Trades</h2>
                    <div className={styles.tradesList}>
                        {
                            trades?.map((trade) => (
                                <div
                                    key={trade.id}
                                    className={styles.trade}
                                >
                                    <p>{trade.bidQuantity} {trade.bid}</p>
                                    <p>Price: {trade.askQuantity} {trade.ask}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}