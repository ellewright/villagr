import styles from "./ErrorPage.module.css";
import PageContainer from "../../components/containers/PageContainer/PageContainer";
import HeaderContainer from "../../components/containers/HeaderContainer/HeaderContainer";
import BodyContainer from "../../components/containers/BodyContainer/BodyContainer";
import FooterContainer from "../../components/containers/FooterContainer/FooterContainer";
import Error from "../../components/errors/Error/Error";

export default function ErrorPage() {
    return (
        <PageContainer>
            <HeaderContainer>
                <div className={styles.title}>
                    <h1>
                        Error
                    </h1>
                </div>
            </HeaderContainer>
            <BodyContainer>
                <div className={styles.error}>
                    <Error />
                </div>
            </BodyContainer>
            <FooterContainer></FooterContainer>
        </PageContainer>
    )
}