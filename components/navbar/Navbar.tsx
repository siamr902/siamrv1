import { AnimatePresence, motion, Variants } from "framer-motion";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useModal } from "../../contexts/ModalContext";
import { useSidebar } from "../../hooks/useSidebar";
import { useScrollVertical } from "../../hooks/useScrollVertical";
import Menu from "./Menu";
import NavigationInfo from "./NavigationInfo";
import ThemeToggle from "./ThemeToggle";
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const { setTheme } = useTheme();
  const lgScreen = useMediaQuery("(min-width: 1024px)");
  const mdScreen = useMediaQuery("(min-width: 768px)");
  const smScreen = useMediaQuery("(min-width: 640px)");

  const { push } = useRouter();
  const { showModal } = useModal();

  const { scrollUp, scrollVertical } = useScrollVertical();
  const { hamburgerRef, menuOpen, menuRef, mounted, setMenuOpen } =
    useSidebar();

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    setTheme(theme);
  }, [darkMode, setTheme]);

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        className={`w-full flex items-center justify-between py-5 px-6 lg:px-10 bg-transparent nav-blur z-[150] sticky top-0 transition duration-500 ease-out ${
          (scrollUp && !showModal) || scrollVertical < 70
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        <motion.div
          className="text-6xl sm:text-7xl font-brush font-semibold cursor-pointer select-none"
          variants={container}
          initial="hidden"
          animate="show"
          whileHover={{
            scaleX: [1, 1.3, 1, 1.2, 1, 1.1, 1, 1.05, 1],
            scaleY: [1, 1.3, 1, 1.2, 1, 1.1, 1, 1.05, 1],
          }}
          whileTap={{ scaleY: 0.8 }}
          transition={{ type: "spring", bounce: 0.5, duration: 1 }}
          onClick={() => {
            push("/");
          }}
        >
          {siteName.map((letter) => (
            <motion.span
              key={letter}
              variants={child}
              transition={{ duration: 2 }}
              className={`inline-flex ${letter === "!" ? "text-[#DE3163]" : ""}`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <div
          className="flex space-x-16 items-center justify-center"
          ref={hamburgerRef}
        >
          <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </motion.nav>
      <AnimatePresence mode="wait">
        {menuOpen ? (
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: lgScreen ? "27%" : mdScreen ? "33%" : smScreen ? "40%" : "60%",
              transition: { type: "spring", damping: 10, mass: 0.7 },
            }}
            exit={{
              width: 0,
              transition: {
                delay: 0.7,
                duration: 0.4,
              },
            }}
            ref={menuRef}
            className="fixed top-0 left-0 w-[50%] sm:w-[40%] md:w-[33%] lg:w-[27%] min-h-screen z-[160] shadow-lg shadow-[#333] dark:shadow-black dark:bg-[#222] bg-[#ececec] transition"
          >
            <NavigationInfo />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20, transition: { type: "spring", damping: 7 } },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 7 } },
};

const siteName = ["S", "I", "A", "M", "R", "!"];
