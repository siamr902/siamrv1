import { IconType } from "react-icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

type LinksProps = {
  Icon: IconType;
  src: string;
};

export const links: LinksProps[] = [
  {
    Icon: FaLinkedinIn,
    src: "https://www.linkedin.com/in/siamarahman/",
  },
  {
    Icon: FaGithub,
    src: "https://github.com/siamr902"
  },
];
