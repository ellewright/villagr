import { useContext, useEffect, useRef, useState } from "react";
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
import QueryFilter from "../../components/filters/QueryFilter/QueryFilter";
import { ThemeContext } from "../../contexts/ThemeContext";
import WelcomeModal from "../../components/modals/WelcomeModal/WelcomeModal";

export default function HomePage() {
    const [villagers, setVillagers] = useState([]);
    const [query, setQuery] = useState(undefined);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const filters = [
        {
            title: "name",
            element: <NameFilter key={0} setVillagers={setVillagers} />
        },
        {
            title: "job",
            element: <JobFilter key={1} setVillagers={setVillagers} />
        },
        {
            title: "gender",
            element: <GenderFilter key={2} setVillagers={setVillagers} />
        }
    ]

    useEffect(() => {
        async function loadVillagerData() {
            const data = await fetchVillagers();
            setVillagers(data);
        }

        loadVillagerData();
    }, []);

    return (
        <PageContainer>
            <WelcomeModal />
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
                    <QueryFilter query={query} setQuery={setQuery} />
                    {filters.map((filter) => {
                        if (filter.title === query) {
                            return filter.element;
                        }
                    })}
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
                <div className={isDarkMode ? styles.footerLinks : `${styles.footerLinks} ${styles.light}`}>
                    <Link to="settings">
                        Settings
                    </Link>
                </div>
            </FooterContainer>
        </PageContainer>
    );
}