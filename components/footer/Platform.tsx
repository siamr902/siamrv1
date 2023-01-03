import React from "react";
import { IconType } from "react-icons";

type LinksProps = {
  Icon: IconType;
  src: string;
};

const Platform = ({ Icon, src }: LinksProps) => {
  return (
    <>
      <a href={src} target="_blank" rel="noopener noreferrer">
        <Icon className="w-4 h-4 sm:w-[20px] sm:h-[20px] cursor-pointer transition duration-200 ease-out dark:opacity-60" />
      </a>
    </>
  );
};
 
export default Platform;
