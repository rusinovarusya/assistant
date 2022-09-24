import { FC, memo, PropsWithChildren, useEffect, useState } from "react";
import styles from "./BlockNow.module.css";


interface BlockNowProps {}

const BlockNow: FC<PropsWithChildren<BlockNowProps>> = ({children}) => {

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.timeAndDate}>
        <div>{dateState.toLocaleTimeString()}</div>
        <div>{dateState.toLocaleDateString("en", {
          year: "numeric",
          month: "long",
          weekday: "long",
          day: "numeric"
        })}</div>
      </div>
      {children}
    </div>
  )
}

export default memo(BlockNow);
