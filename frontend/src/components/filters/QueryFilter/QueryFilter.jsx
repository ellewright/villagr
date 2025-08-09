import styles from "./QueryFilter.module.css";

export default function QueryFilter({ query, setQuery }) {
    return (
        <form className={styles.form}>
            <select
                className={styles.dropdown}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            >
                <option value="">Filter by:</option>
                <option value="name">Name</option>
                <option value="job">Job</option>
                <option value="gender">Gender</option>
            </select>
        </form>
    )
}