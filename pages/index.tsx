import type { NextPage } from "next";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Footer, Content, Trail } from "../components";
import { ModalContextProvider } from "../contexts/ModalContext";

const Home: NextPage = () => {
  return (
    <>
      <ModalContextProvider>
        <Head>
          <title>siamr</title>
          <link rel="shortcut icon" href="siamrbot.ico" />
        </Head>
        <ToastContainer />
        <Trail />
        <Navbar />
        <Content />
        <Footer />
      </ModalContextProvider>
    </>
  );
};

export default Home;
