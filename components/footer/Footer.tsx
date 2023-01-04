import React from "react";
import { links } from "../../data/links";
import { FooterCircles } from "../main/blurs/BlurCircles";
import Platform from "./Platform";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-full px-14 py-12 flex flex-col space-y-4 sm:flex-row sm:justify-between space-x-5 items-center shadow-lg bg-zinc-100 dark:bg-[#222] shadow-black dark:shadow-gray-200">
      <FooterCircles />
      <div className="flex flex-col space-y-6 items-start">
        <div className="hidden sm:flex relative items-center space-x-3 text-2xl font-ui">
          <div className="text-2xl opacity-90 dark:opacity-60">&copy;</div>
          <div className="opacity-90 dark:opacity-60">2022 - now</div>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          {links.map((link) => (
            <Platform Icon={link.Icon} src={link.src}/>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-4 items-center">
        <div className="font-ui tracking-wider text-3xl text-center sm:text-start">
          Siam Rahman
        </div>
        <div className="sm:hidden text-2xl text-center opacity-60 font-ui">
          <span className="text-xl">&copy;</span> 2022-now
        </div>
        <div className="flex sm:hidden items-center space-x-4">
          {links.map((link) => (
            <Platform Icon={link.Icon} src={link.src}/>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
