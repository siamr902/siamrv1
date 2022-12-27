import { motion } from "framer-motion";
import React from "react";

interface Props {
  setMenuOpen: (v: boolean) => void;
  menuOpen: boolean;
}

const Menu = ({ setMenuOpen, menuOpen }: Props) => {
  return (
    <>
      <motion.button
        initial={{ opacity: 0, x: 25, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, delay: 4 }}
        className="flex flex-col items-center justify-center p-4 w-[80px] h-[80px] outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        
      >
        <div className={`w-full ham-menu ${menuOpen && "open"}`}></div>
        <div
          className={`w-[80%] ham-menu mt-[15px] mb-[15px] ${
            menuOpen && "open"
          }`}
        ></div>
        <div className={`w-full ham-menu ${menuOpen && "open"}`}></div>
      </motion.button>
    </>
  );
};

export default Menu;
