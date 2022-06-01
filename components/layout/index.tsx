import { FC } from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-100 overflow-y-scroll ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
