import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-16 flex flex-col space-y-4 sm:flex-row sm:justify-between space-x-5 items-center shadow-lg bg-zinc-100 dark:bg-[#222] shadow-black dark:shadow-gray-200">
      <motion.div
        className="hidden sm:flex items-center space-x-3 text-4xl font-brush"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="text-2xl">&copy;</div>
        <div>2022 - now</div>
      </motion.div>
      <div className="flex flex-col space-y-3">
        <motion.div
          className="font-brush tracking-widest text-5xl text-center sm:text-start"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          Siam Rahman
        </motion.div>
        <motion.div className="sm:hidden text-4xl text-center opacity-60 font-brush">
          <div>
            <span className="text-xl">&copy;</span> 2022-present
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
