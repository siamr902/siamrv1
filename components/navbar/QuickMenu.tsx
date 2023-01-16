import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useScrollVertical } from "../../hooks/useScrollVertical";
import { FaCrown } from "react-icons/fa";

const parent: Variants = {
  start: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.27,
      staggerDirection: 1,
      delayChildren: 1,
    },
  },
};

const child: Variants = {
  start: {
    y: -200,
    opacity: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      stiffness: 150,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.5,
      stiffness: 150,
    },
  },
};

const QuickMenu = () => {
  const { scrollVertical } = useScrollVertical();
  return (
    <AnimatePresence mode="wait">
      {scrollVertical < 70 ? (
        <motion.div
          className="hidden lg:flex absolute bottom-4 -right-[155%] items-center space-x-6"
          variants={parent}
          initial="start"
          animate="show"
          exit="start"
        >
          <Link href="/#projects">
            <motion.div className="quick-menu relative" variants={child}>
              Projects
              <FaCrown className="h-3 w-3 absolute -top-[2px] left-[37%] dark:text-amber-300 text-amber-500"/>
            </motion.div>
          </Link>
          <Link href="/#articles">
            <motion.div className="quick-menu" variants={child}>
              Articles
            </motion.div>
          </Link>
          <Link href="/#contact">
            <motion.div className="quick-menu" variants={child}>
              Contact
            </motion.div>
          </Link>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default QuickMenu;
