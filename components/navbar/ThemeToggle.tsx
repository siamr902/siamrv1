import { motion } from "framer-motion";
import React from "react";
import { HiOutlineSun, HiSun, HiOutlineMoon, HiMoon } from "react-icons/hi";

type Props = {
  setDarkMode: (v: boolean) => void;
  darkMode: boolean;
};

const ThemeToggle = ({ setDarkMode, darkMode }: Props) => {
  return (
    <motion.div
      className="hidden sm:flex space-x-8 py-[10px] px-4 rounded-full shadow-sm shadow-zinc-300 dark:shadow-[#111] bg-zinc-100 dark:bg-[#222]"
      initial={{ opacity: 0, x: -100, y: -200 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 2, delay: 1.3 }}
    >
      {darkMode ? (
        <>
          <div className="theme-container">
            <HiOutlineSun
              onClick={() => setDarkMode(false)}
              className="theme-btn"
            />
          </div>
          <div className="theme-container">
            <HiMoon onClick={() => setDarkMode(true)} className="theme-btn" />
          </div>
        </>
      ) : (
        <>
          <div className="theme-container">
            <HiSun onClick={() => setDarkMode(false)} className="theme-btn" />
          </div>
          <div className="theme-container">
            <HiOutlineMoon
              onClick={() => setDarkMode(true)}
              className="theme-btn"
            />
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ThemeToggle;
