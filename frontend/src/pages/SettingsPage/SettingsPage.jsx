import { useContext } from "react";
import BodyContainer from "../../components/containers/BodyContainer/BodyContainer";
import HeaderContainer from "../../components/containers/HeaderContainer/HeaderContainer";
import PageContainer from "../../components/containers/PageContainer/PageContainer";
import styles from "./SettingsPage.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SettingsPage() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <PageContainer>
            <HeaderContainer>
                <div className={styles.title}>
                    <h1>
                        Settings
                    </h1>
                </div>
            </HeaderContainer>
            <BodyContainer>
                <button
                    className={isDarkMode ? styles.button : `${styles.button} ${styles.light}`}
                    onClick={toggleTheme}
                >
                    {
                        isDarkMode ? "Light Mode"
                            : "Dark Mode"
                    }
                </button>
            </BodyContainer>
        </PageContainer>
    )
}