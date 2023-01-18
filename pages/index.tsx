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
          <title>Siam Rahman — Developer Portfolio</title>
          <link rel="shortcut icon" href="siamrbot.ico" />
          <meta
            name="description"
            content="Siam Rahman's portfolio site, showcasing skill sets and work across areas of web development and UI/UX design.."
          ></meta>
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
