import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { GiTopHat } from "react-icons/gi";
import { ThemeCircles, LeftSideCircles } from "../blurs/BlurCircles";
import OrbCanvas from "../orb/OrbCanvas";

const firstIntroWord = ["W", "e", "l", "c", "o", "m", "e", ","];

const secondIntroWord = ["I", "'", "m"];

const Hero = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div className="w-full min-h-[70vh] flex flex-col space-y-10 p-6 items-center justify-start relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 7, duration: 2 }}
      >
        <ThemeCircles />
        <LeftSideCircles />
      </motion.div>
      <motion.div
        className="font-headline text-[8vw] sm:text-5xl md:text-6xl lg:text-7xl relative text-center select-none z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 6 }}
      >
        {firstIntroWord.map((letter, idx) => (
          <motion.span
            key={letter + idx}
            className="relative inline-flex hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-darkred hover:to-darkpurple dark:hover:from-skyblue dark:hover:to-skypurple hover:font-bold"
            whileHover={{ scaleX: [1, 0.9, 1], scaleY: [1, 1.5, 1, 1.2, 1] }}
            whileTap={{ scaleY: 1.1 }}
            transition={{ ease: [0.17, 0.23, 0.63, 0.87] }}
          >
            {letter}
          </motion.span>
        ))}
        &nbsp;
        {secondIntroWord.map((letter) => (
          <motion.span
            key={letter}
            className="relative inline-flex hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-darkred hover:to-darkpurple dark:hover:from-skyblue dark:hover:to-skypurple hover:font-bold"
            whileHover={{ scaleX: [1, 1.1, 1], scaleY: [1, 1.5, 1, 1.2, 1] }}
            whileTap={{ scaleY: 1.1 }}
            transition={{ ease: [0.17, 0.23, 0.63, 0.87] }}
          >
            {letter}
          </motion.span>
        ))}
        &nbsp;
        <span className="tracking-wide font-semibold bg-clip-text text-transparent bg-gradient-to-r dark:from-skyblue dark:to-skypurple from-darkred to-darkpurple">
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
                className="hidden lg:inline-flex h-8 w-7 absolute -top-[15px] right-[66px] rotate-[30deg] cursor-pointer text-black dark:text-skypurple"
                onClick={() => setClicked(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 6 }}
        className="max-w-[70%] text-center text-xl sm:text-[22px] md:text-[26px] lg:text-[28px] font-ui z-10 select-none"
        style={{ lineHeight: "60px" }}
      >
        A <span className="text-darkred dark:text-fuchsia-300">developer</span>{" "}
        training to enhance his skill sets and seek greater depths of
        understanding of modern frameworks and technologies. Current activities
        include web development, UX design, and competitive programming.
      </motion.p>
      <OrbCanvas />
    </div>
  );
};

export default Hero;
