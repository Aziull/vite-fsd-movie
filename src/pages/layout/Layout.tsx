import React, {ReactNode} from 'react';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';




type LayoutPropsType = {
    children: ReactNode
}
export const Layout: React.FC<LayoutPropsType> = ({children}) => {
  return (
    <>
       <Header/>
        <div>
            {children}
        </div>
        <Footer />
    </>
  )
}
