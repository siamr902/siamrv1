type MenuProps = {
  name: string;
  href: string;
  offsetWidth: number;
};

export const menuItems: MenuProps[] = [
  {
    name: "Home",
    href: "/#",
    offsetWidth: 91
  },
  {
    name: "Techs",
    href: "/#techs",
    offsetWidth: 110
  },
  {
    name: "Projects",
    href: "/#projects",
    offsetWidth: 175,
  },
  {
    name: "Contact",
    href: "/#contact",
    offsetWidth: 153,
  },
  {
    name: "Blog",
    href: "https://srblog.vercel.app/",
    offsetWidth: 91,
  },
];
