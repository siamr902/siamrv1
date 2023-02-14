import { motion } from "framer-motion";
import React from "react";

type Props = {
  setMenuOpen: (v: boolean) => void;
  menuOpen: boolean;
};

const Menu = ({ setMenuOpen, menuOpen }: Props) => {
  return (
    <>
      <motion.button
        initial={{ opacity: 0, x: 25, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, delay: 2.3 }}
        className={`sm:hidden flex flex-col items-center justify-center p-4 w-[80px] h-[80px] outline-none`}
        onClick={() => setMenuOpen(true)}
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
      <motion.div
        initial={{ opacity: 0, x: 25, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, delay: 2.3 }}
        className="hidden sm:inline-flex font-headline text-4xl cursor-pointer"
        onClick={() => setMenuOpen(true)}
      >
        Menu
      </motion.div>
    </>
  );
};

export default Menu;
