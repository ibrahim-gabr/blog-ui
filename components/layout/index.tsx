import { FC } from "react";
import Header from "./header";
import Footer from "./footer";
import { Flip, ToastContainer } from 'react-toastify';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-full px-4 mx-auto max-w-7xl">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={true}
          transition={Flip}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </div>
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 bg-white">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
