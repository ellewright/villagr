import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { fetchVillagers } from "../../api/villager";
import VillagerCardWide from "../../components/villagers/VillagerCardWide/VillagerCardWide";
import PageContainer from "../../components/containers/PageContainer/PageContainer";
import HeaderContainer from "../../components/containers/HeaderContainer/HeaderContainer";
import BodyContainer from "../../components/containers/BodyContainer/BodyContainer";
import GenderFilter from "../../components/filters/GenderFilter/GenderFilter";
import JobFilter from "../../components/filters/JobFilter/JobFilter";
import NameFilter from "../../components/filters/NameFilter/NameFilter";
import FooterContainer from "../../components/containers/FooterContainer/FooterContainer";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [villagers, setVillagers] = useState([]);

    useEffect(() => {
        async function loadVillagerData() {
            const data = await fetchVillagers();
            setVillagers(data);
        }

        loadVillagerData();
    }, []);

    return (
        <PageContainer>
            <HeaderContainer>
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
                <div className={styles.filter}>
                    <GenderFilter setVillagers={setVillagers} />
                    <NameFilter setVillagers={setVillagers} />
                    <JobFilter setVillagers={setVillagers} />
                </div>
            </HeaderContainer>
            <BodyContainer>
                <div className={styles.villagerList}>
                    {villagers.map((villager) => (
                        <VillagerCardWide key={villager.id} villager={villager} />
                    ))}
                </div>
            </BodyContainer>
            <FooterContainer>
                <div className={styles.footerLinks}>
                    <Link to="settings">
                        Settings
                    </Link>
                </div>
            </FooterContainer>
        </PageContainer>
    );
}