import { motion } from "framer-motion";
import React from "react";
import { FooterCircles } from "../main/blurs/BlurCircles";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-full p-16 flex flex-col space-y-4 sm:flex-row sm:justify-between space-x-5 items-center shadow-lg bg-zinc-100 dark:bg-[#222] shadow-black dark:shadow-gray-200">
      <FooterCircles />
      <div className="hidden sm:flex relative items-center space-x-3 text-2xl font-ui">
        <div className="text-2xl opacity-90 dark:opacity-60">&copy;</div>
        <div className="opacity-90 dark:opacity-60">2022 - now</div>
      </div>
      <div className="flex flex-col space-y-3">
        <div className="font-ui tracking-wider text-3xl text-center sm:text-start">
          Siam Rahman
        </div>
        <div className="sm:hidden text-2xl text-center opacity-60 font-ui">
          <span className="text-xl">&copy;</span> 2022-now
        </div>
      </div>
    </footer>
  );
};

export default Footer;
