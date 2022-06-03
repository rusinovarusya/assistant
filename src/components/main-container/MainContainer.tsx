import { FC, memo, PropsWithChildren } from "react";


interface MainContainerProps {}

const MainContainer: FC<PropsWithChildren<MainContainerProps>> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default memo(MainContainer);
