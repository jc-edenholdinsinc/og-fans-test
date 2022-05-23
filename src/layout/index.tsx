import { FC, Fragment, ReactNode } from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

interface LayoutInterface {
   children: ReactNode;
   title?: string;
   description?: string;
}

const Layout: FC<LayoutInterface> = ({
   title,
   description,
   children,
}) => {
   return (
      <Fragment>
         <Header
            title={title}
            description={description}
         />
         {/* <div className="relative"> */}
            <Navbar />
            <main>{children}</main>
            <Footer />
         {/* </div> */}
      </Fragment>
   );
};

export default Layout;
