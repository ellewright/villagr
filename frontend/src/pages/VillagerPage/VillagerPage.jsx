import { useParams } from "react-router-dom";
import styles from "./VillagerPage.module.css";
import { useEffect, useState } from "react";
import { fetchJobById } from "../../api/job";
import { fetchVillagerByName } from "../../api/villager";
import { fetchTradesByVillagerId } from "../../api/trade";
import { getSrc } from "../../util/util";

export default function VillagerPage() {
    const { name } = useParams();
    const [villager, setVillager] = useState({});
    const [trades, setTrades] = useState([]);
    const [job, setJob] = useState();

    useEffect(() => {
        async function loadVillager(name) {
            const data = await fetchVillagerByName(name);
            setVillager(data);
        }

        loadVillager(name);
    }, []);

    useEffect(() => {
        async function loadJob(id) {
            const data = await fetchJobById(id);
            setJob(data);
        }

        async function loadTrades(villagerId) {
            const data = await fetchTradesByVillagerId(villagerId);
            setTrades(data);
        }

        if (villager && villager.jobId) {
            loadJob(villager?.jobId);
            loadTrades(villager?.id);
        }
    }, [villager]);

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
                </div>
                <div className={styles.tradesContainer}>
                    <h2>Trades</h2>
                    <div className={styles.tradesList}>
                        <div className={styles.trade}>
                            <p className={styles.cell}>
                                For sale
                            </p>
                            <p className={styles.cell}>
                                Price
                            </p>
                        </div>
                        {
                            trades?.map((trade) => (
                                <div
                                    key={trade.id}
                                    className={styles.trade}
                                >
                                    <p className={styles.cell}>
                                        <img src={getSrc(trade.ask)} alt="Bid icon." />
                                        {trade.askQuantity} {trade.ask}
                                    </p>
                                    <p className={styles.cell}>
                                        <img src={getSrc(trade.bid)} alt="Bid icon." />
                                        {trade.bidQuantity} {trade.bid}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}