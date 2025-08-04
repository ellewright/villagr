import { useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
    const error = useRouteError()

    if (import.meta.env.VITE_MODE != "production") {
        return (
            <div className={`${styles.error} ${styles.development}`}>
                <div className={styles.header}>
                    <h1>Uh oh!</h1>
                    <p>There seems to be an error.</p>
                </div>
                <div className={styles.body}>
                    <pre className={styles.errorMessage}>
                        {error.message}
                    </pre>
                    <pre className={styles.stackTrace}>
                        {error.stack}
                    </pre>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`${styles.error} ${styles.production}`}>
                <div className={styles.header}>
                    <h1>Uh oh!</h1>
                </div>
                <div className={styles.body}>
                    <p>
                        We can't seem to find the page you're looking for. Please try refreshing the window.
                    </p>
                </div>
            </div>
        )
    }
}