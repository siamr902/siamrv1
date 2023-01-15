import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { MotionConfig } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  return (
    <ThemeProvider attribute="class">
      <MotionConfig reducedMotion="user">
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default MyApp;
