type MenuProps = {
  name: string;
  href: string;
  offsetWidth: number;
};

export const menuItems: MenuProps[] = [
  {
    name: "Home",
    href: "#",
    offsetWidth: 91
  },
  {
    name: "Skills",
    href: "#skills",
    offsetWidth: 100
  },
  {
    name: "Projects",
    href: "#projects",
    offsetWidth: 160,
  },
  {
    name: "Contact",
    href: "#contact",
    offsetWidth: 140,
  },
  {
    name: "Blog 🡥",
    href: "https://www.siamrblogs.com",
    offsetWidth: 104,
  },
];
