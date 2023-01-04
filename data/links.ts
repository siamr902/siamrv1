import { IconType } from "react-icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiPolywork } from "react-icons/si";

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
    src: "https://github.com/siamr902",
  },
  {
    Icon: SiPolywork,
    src: "https://poly.me/siam_rahman",
  },
];
