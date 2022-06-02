import { FC, memo } from "react";
import styles from "./Logo.module.css";


const Logo: FC = () => {
  return (
    <span className={styles.logo}>Assistant</span>
  )
}

export default memo(Logo);
