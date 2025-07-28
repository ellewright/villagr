import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { fetchVillagers, fetchVillagersByGender } from "../../api/villager";
import VillagerCardWide from "../../components/villagers/VillagerCardWide/VillagerCardWide";
import PageContainer from "../../components/containers/PageContainer/PageContainer";
import HeaderContainer from "../../components/containers/HeaderContainer/HeaderContainer";
import BodyContainer from "../../components/containers/BodyContainer/BodyContainer";

export default function HomePage() {
    const [villagers, setVillagers] = useState([]);
    const [genderFilter, setGenderFilter] = useState("");

    useEffect(() => {
        async function loadVillagerData() {
            const data = await fetchVillagers();
            setVillagers(data);
        }

        loadVillagerData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (genderFilter !== "") {
            const data = await fetchVillagersByGender(genderFilter);
            setVillagers(data);
        } else {
            const data = await fetchVillagers();
            setVillagers(data);
        }
    }

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
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <select
                            className={styles.dropdown}
                            onChange={(e) => setGenderFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <button
                            className={styles.submit}
                            type="submit"
                        >
                            Filter
                        </button>
                    </form>
                </div>
            </HeaderContainer>
            <BodyContainer>
                <div className={styles.villagerList}>
                    {villagers.map((villager) => (
                        <VillagerCardWide key={villager.id} villager={villager} />
                    ))}
                </div>
            </BodyContainer>
        </PageContainer>
    );
}