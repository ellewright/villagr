import styles from "./HeaderContainer.module.css";

export default function HeaderContainer({ children }) {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}