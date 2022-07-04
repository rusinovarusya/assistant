import { FC, memo } from "react";
import styles from "./PlansCard.module.css";


const PlansCard: FC = () => {
  return (
    <div className={styles.card}>Card</div>
  )
}

export default memo(PlansCard);
