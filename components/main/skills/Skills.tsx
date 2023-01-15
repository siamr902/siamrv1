import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";
import { useModal } from "../../../contexts/ModalContext";
import ThemeCircles, { TechCircles } from "../blurs/BlurCircles";
import TechIcons from "./TechIcons";

const variants = {
  start: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.65,
    },
  },
};

const Skills = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="relative min-h-[80vh] flex flex-col space-y-5 sm:space-y-20 items-center justify-center p-8 mt-10 md:mt-20"
    >
      <ThemeCircles />
      <TechCircles />
      <motion.div
        className={`section-title ${theme === "light" ? "darkbolts" : ""}`}
        whileInView={{ scale: [1, 1.2, 1] }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
      >
        Skills
      </motion.div>
      <motion.div
        className="grid grid-cols-4 place-items-center gap-x-[22vw] gap-y-[14vw] sm:gap-14 md:gap-16 lg:gap-x-[10vw] lg:gap-y-[16vh] px-8 py-4  justify-center items-center"
        variants={variants}
        initial="start"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <TechIcons />
      </motion.div>
    </motion.div>
  );
};

export default Skills;
