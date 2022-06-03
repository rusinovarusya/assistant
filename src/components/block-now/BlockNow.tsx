import { FC, memo, PropsWithChildren } from "react";
import styles from "./BlockNow.module.css";


interface BlockNowProps {}

const now = new Date();
const time = "00:00:00";
const date = now.toLocaleDateString("en", {
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric"
});

const BlockNow: FC<PropsWithChildren<BlockNowProps>> = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.timeAndDate}>
        <div>{time}</div>
        <div>{date}</div>
      </div>
      {children}
    </div>
  )
}

export default memo(BlockNow);
