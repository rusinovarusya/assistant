import { FC, memo, PropsWithChildren } from "react";
import styles from "./Plans.module.css";


interface PlansProps {}

const Plans: FC<PropsWithChildren<PlansProps>> = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default memo(Plans);
