import { FC, memo, PropsWithChildren } from "react";
import styles from "./Main.module.css";


interface MainProps {}

const Main: FC<PropsWithChildren<MainProps>> = ({children}) => {
  return (
    <main className={styles.main}>{children}</main>
  )
}

export default memo(Main);
