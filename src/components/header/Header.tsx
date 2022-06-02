import { FC, memo, PropsWithChildren } from "react";
import styles from "./Header.module.css";


interface HeaderProps {}

const Header: FC<PropsWithChildren<HeaderProps>> = ({children}) => {
  return (
    <header className={styles.header}>{children}</header>
  )
}

export default memo(Header);
