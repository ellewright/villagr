import styles from "./FooterContainer.module.css";

export default function FooterContainer({ children }) {
    return (
        <div className={styles.footer}>
            {children}
        </div>
    )
}