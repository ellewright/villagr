import styles from "./BodyContainer.module.css";

export default function BodyContainer({ children }) {
    return (
        <div className={styles.body}>
            {children}
        </div>
    )
}