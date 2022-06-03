import { FC, memo } from "react";
import styles from "./Footer.module.css";


const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles.link} href="https://github.com/rusinovarusya">rusinovarusya</a>
    </footer>
  )
}

export default memo(Footer);
