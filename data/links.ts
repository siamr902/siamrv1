import { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";

type LinksProps = {
  Icon: IconType;
  src: string;
};

export const links: LinksProps[] = [
  {
    Icon: FaLinkedinIn,
    src: "https://www.linkedin.com/in/mirmohammed-rahman-04b522234/",
  },
];
