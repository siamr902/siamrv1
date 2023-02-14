import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { ReactNode } from "react";
import {RxCross1} from "react-icons/rx"
import { menuItems } from "../../data/menuItems";
import { childOpacity as child } from "../../utils/animationChildren";
import { MenuCircles } from "../main/blurs/BlurCircles";

const variants: Variants = {
  start: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.27,
      staggerDirection: 1,
    },
  },
};

type Props = {
  setMenuOpen: (v: boolean) => void;
};

const NavigationInfo = ({ setMenuOpen }: Props) => {
  const generateSvg = (width: number): ReactNode => {
    return (
      <svg width={width} height="35" xmlns="http://www.w3.org/2000/svg">
        <path
          d={`m 0 12 l ${width * 0.6} -10 l ${width * -0.2} 10 l ${
            width * 0.7
          } -10`}
          fill="transparent"
          strokeWidth="3"
          strokeLinecap="round"
          className="dark:stroke-skypurple stroke-[#E30B5C]"
        />
      </svg>
    );
  };

  return (
    <motion.div
      variants={variants}
      initial="start"
      animate="show"
      exit="start"
      className="relative flex flex-col items-center justify-evenly text-center min-h-screen p-4"
    >
      <motion.div className="absolute" exit={{ opacity: 0 }}>
        <MenuCircles />
      </motion.div>
      {menuItems.map((menuItem) =>
        menuItem.name === "Blog 🡥" ? (
          <a
            href={menuItem.href}
            key={menuItem.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              variants={child}
              transition={{ duration: 1, type: "spring" }}
              className="menu-item linksvg"
              whileTap={{ scale: 1.2 }}
            >
              {menuItem.name}
              {generateSvg(menuItem.offsetWidth)}
            </motion.div>
          </a>
        ) : (
          <Link href={menuItem.href} key={menuItem.name}>
            <motion.div
              variants={child}
              transition={{ duration: 1, type: "spring" }}
              className="menu-item linksvg"
              whileTap={{ scale: 1.2 }}
            >
              {menuItem.name}
              {generateSvg(menuItem.offsetWidth)}
            </motion.div>
          </Link>
        )
      )}
      <motion.button
        animate={{ y: 0, rotate: "90deg" }}
        exit={{ y: -100 }}
        transition={{ type: "spring", damping: 6, mass: 0.7 }}
        className="absolute top-3 right-4 cursor-pointer"
        onClick={() => setMenuOpen(false)}
        aria-label="Close"
      >
        <RxCross1 className="w-6 h-6 dark:text-red-400 text-darkred"/>
      </motion.button>
    </motion.div>
  );
};

export default NavigationInfo;
