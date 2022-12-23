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

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const { setTheme } = useTheme();

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
        className={`w-full flex items-center justify-between py-5 px-6 lg:px-10 bg-transparent nav-blur z-[150] sticky top-0 transition-transform duration-500 ease-out ${
          (scrollUp && !showModal) || scrollVertical < 70 ? "translate-y-0" : "-translate-y-full"
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
              className="inline-flex"
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            variants={child}
            transition={{ duration: 2 }}
            className="text-[#DE3163]"
          >
            !
          </motion.span>
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
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            ref={menuRef}
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
      staggerChildren: 0.5,
    },
  },
};

const child: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const siteName = ["S", "I", "A", "M", "R"];
