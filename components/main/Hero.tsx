import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { GiTopHat } from "react-icons/gi";

const Hero = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <motion.div className="w-full min-h-[70vh] flex flex-col space-y-10 p-6 items-center justify-start relative">
      <motion.div
        className="font-brush text-6xl md:text-7xl lg:text-8xl relative text-center"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 6 }}
      >
        <span className="relative">WELCOME, I&apos;M </span>
        <span className="tracking-wider bg-clip-text text-transparent font-semibold bg-gradient-to-r dark:from-[#12c2e9] dark:to-[#c471ed] from-[#c31432] to-[#240b36]">
          SI
          <span
            className={`${clicked ? "" : "cursor-pointer"}`}
            onClick={() => setClicked(true)}
          >
            A
          </span>
          M
        </span>
        <AnimatePresence mode="wait">
          {clicked ? null : (
            <motion.div exit={{ opacity: 0 }} transition={{ duration: 2 }}>
              <GiTopHat
                className="hidden lg:inline-flex h-8 w-7 absolute -top-[13px] right-14 rotate-[30deg] cursor-pointer text-black dark:text-[#c471ed]"
                onClick={() => setClicked(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 6 }}
        className="max-w-[75%] tracking-wider text-center text-3xl sm:text-4xl md:text-[44px] font-brush -z-10"
        style={{ lineHeight: "60px" }}
      >
        A <span className="text-[#c31432] dark:text-sky-300">developer</span>{" "}
        training to enhance his skill sets and seek greater depths of
        understanding of modern frameworks and technologies. Current areas of
        interest include
        <span className="dark:text-red-300 text-red-500"> web</span>{" "}
        development, database design, and competitive programming.
      </motion.p>
    </motion.div>
  );
};

export default Hero;
