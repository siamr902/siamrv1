// import { AnimatePresence, motion } from "framer-motion";
import React from "react";
// import { TiArrowUp } from "react-icons/ti";
// import { useShowButton } from "../../hooks/useShowButton";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Content = () => {
  // const { showBtn } = useShowButton();
  return (
    <>
      <main className="mt-20 pb-14">
        <Hero />
        <Technologies />
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      {/* <AnimatePresence mode="wait">
        {showBtn ? (
          <motion.div
            className="hidden md:flex p-1 z-50 rounded-full bg-white dark:bg-[#222] items-center justify-center fixed bottom-[4%] right-[4%] cursor-pointer shadow-lg shadow-gray-500 dark:shadow-black active:scale-95 transition duration-200 ease-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            <TiArrowUp className="w-10 h-10 -translate-x-[2px] dark:text-white" />
          </motion.div>
        ) : null}
      </AnimatePresence> */}
    </>
  );
};

export default Content;
