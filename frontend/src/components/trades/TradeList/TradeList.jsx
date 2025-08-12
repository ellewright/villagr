import { useContext } from "react";
import { getSrc } from "../../../util/util";
import styles from "./TradeList.module.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function TradeList({ trades }) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={isDarkMode ? styles.container : `${styles.container} ${styles.light}`}>
            <h2 className={styles.title}>Trades</h2>
            <div className={styles.list}>
                <div className={styles.trade}>
                    <p className={isDarkMode ? styles.cell : `${styles.cell} ${styles.light}`}>
                        For sale
                    </p>
                    <p className={isDarkMode ? styles.cell : `${styles.cell} ${styles.light}`}>
                        Price
                    </p>
                </div>
                {
                    trades?.map((trade) => (
                        <div
                            key={trade.id}
                            className={styles.trade}
                        >
                            <p className={isDarkMode ? styles.cell : `${styles.cell} ${styles.light}`}>
                                <img src={getSrc(trade.bid)} alt="Bid icon." />
                                {trade.bidQuantity} {trade.bid}
                            </p>
                            <p className={isDarkMode ? styles.cell : `${styles.cell} ${styles.light}`}>
                                <img src={getSrc(trade.ask)} alt="Ask icon." />
                                {trade.askQuantity} {trade.ask}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}