import { FC, memo } from "react";
import styles from "./Random.module.css"; 


const Random: FC = () => {
  return (
    <div className={styles.random}>Random</div>
  )
}

export default memo(Random);
