import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { MutatingDots } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "~/app/store";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        {loading ? (
          <div className="h-screen w-full flex justify-center items-center">
            <MutatingDots
              color="#3DCDAD"
              height="100"
              width="100"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </Provider>
  );
}

export default MyApp;
