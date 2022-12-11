import type { NextPage } from "next";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Footer, Content } from "../components";
import { ModalContextProvider } from "../contexts/ModalContext";

const Home: NextPage = () => {
  return (
    <>
      <ModalContextProvider>
        <Head>
          <title>siamr | dev</title>
          <link rel="shortcut icons" href="" />
        </Head>
        <ToastContainer />
        <Navbar />
        <Content />
        <Footer />
      </ModalContextProvider>
    </>
  );
};

export default Home;
