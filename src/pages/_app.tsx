import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { MainContent } from "../components/styles";
import Router from "next/router";
import NProgress from "nprogress";
import Footer from "../components/Footer";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <MainContent>
        <Component {...pageProps} />
        <Footer />
      </MainContent>
    </>
  );
}

export default MyApp;
