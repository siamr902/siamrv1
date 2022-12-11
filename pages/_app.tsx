import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  in: {
    opacity: 0,
  },
  out: {
    opacity: 1,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          variants={variants}
          initial="in"
          animate="out"
          exit="in"
          transition={{ duration: 1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
