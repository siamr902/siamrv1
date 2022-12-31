import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { ReactNode } from "react";
import { menuItems } from "../../data/menuItems";
import { childOpacity as child } from "../../utils/animationChildren";
import { MenuCircles } from "../main/blurs/BlurCircles";

const variants: Variants = {
  start: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      staggerDirection: 1,
    },
  },
};

const NavigationInfo = () => {

  const generateSvg = (width: number): ReactNode => {
    return (
      <svg width={width} height="35" xmlns="http://www.w3.org/2000/svg">
        <path
          d={`m 0 0 l ${width} 2 l ${width * -1} 3 l ${width} 4 l ${
            width * -1
          } 2`}
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
      className="flex flex-col items-center justify-evenly text-center min-h-screen p-4"
      // className="fixed top-0 left-0 w-[50%] sm:w-[40%] md:w-[33%] lg:w-[27%] min-h-screen z-[160] flex flex-col items-center justify-evenly p-4 shadow-lg shadow-[#333] dark:shadow-black dark:bg-[#222] bg-[#ececec] transition text-center"
    >
      <MenuCircles />
      {menuItems.map((menuItem) =>
        menuItem.name === "Blog" ? (
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
              whileTap={{ scale: 0.9 }}
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
              whileTap={{ scale: 0.9 }}
            >
              {menuItem.name}
              {generateSvg(menuItem.offsetWidth)}
            </motion.div>
          </Link>
        )
      )}
    </motion.div>
  );
};

export default NavigationInfo;
