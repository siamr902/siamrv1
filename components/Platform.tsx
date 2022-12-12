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
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer transition duration-200 ease-out" />
      </a>
    </>
  );
};

export default Platform;
