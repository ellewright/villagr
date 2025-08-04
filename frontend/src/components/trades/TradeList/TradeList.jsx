import { getSrc } from "../../../util/util";
import styles from "./TradeList.module.css";

export default function TradeList({ trades }) {
    return (
        <div className={styles.container}>
            <h2>Trades</h2>
            <div className={styles.list}>
                <div className={styles.trade}>
                    <p className={styles.cell}>
                        For sale
                    </p>
                    <p className={styles.cell}>
                        Price
                    </p>
                </div>
                {
                    trades?.map((trade) => (
                        <div
                            key={trade.id}
                            className={styles.trade}
                        >
                            <p className={styles.cell}>
                                <img src={getSrc(trade.bid)} alt="Bid icon." />
                                {trade.bidQuantity} {trade.bid}
                            </p>
                            <p className={styles.cell}>
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