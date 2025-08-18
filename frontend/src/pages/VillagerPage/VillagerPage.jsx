import { Link, useParams } from "react-router-dom";
import styles from "./VillagerPage.module.css";
import { useContext, useEffect, useState } from "react";
import { fetchJobById } from "../../api/job";
import { fetchVillagerByName } from "../../api/villager";
import { fetchTradesByVillagerId } from "../../api/trade";
import TradeList from "../../components/trades/TradeList/TradeList";
import PageContainer from "../../components/containers/PageContainer/PageContainer";
import HeaderContainer from "../../components/containers/HeaderContainer/HeaderContainer";
import BodyContainer from "../../components/containers/BodyContainer/BodyContainer";
import FooterContainer from "../../components/containers/FooterContainer/FooterContainer";
import { ThemeContext } from "../../contexts/ThemeContext";
import Messager from "../../components/messages/MessageList/Messager";

export default function VillagerPage() {
    const { name } = useParams();
    const [villager, setVillager] = useState({});
    const [trades, setTrades] = useState([]);
    const [job, setJob] = useState();

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

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
        <PageContainer>
            <HeaderContainer>
                <div className={styles.name}>
                    <h1>
                        {villager.name}
                    </h1>
                </div>
            </HeaderContainer>
            <BodyContainer>
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
                <TradeList trades={trades} />
                <Messager
                    villager={villager}
                    job={job}
                    trades={trades}
                />
            </BodyContainer>
            <FooterContainer>
                <div className={isDarkMode ? styles.footerLinks : `${styles.footerLinks} ${styles.light}`}>
                    <Link to="../">
                        Home
                    </Link>
                    <Link to="../settings">
                        Settings
                    </Link>
                </div>
            </FooterContainer>
        </PageContainer>
    );
}