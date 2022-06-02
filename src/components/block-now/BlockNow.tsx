import { FC, memo, PropsWithChildren } from "react";
import styles from "./BlockNow.module.css";

interface BlockNowProps {}

const BlockNow: FC<PropsWithChildren<BlockNowProps>> = ({children}) => {
  return (
    <div className={styles.container}>Time, date{children}</div>
  )
}

export default memo(BlockNow);
