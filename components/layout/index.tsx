import { FC, Fragment } from "react";
// import Header from './header';
// import Footer from './footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      {/* <Header /> */}
      <main className="bg-gray-100">{children}</main>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
