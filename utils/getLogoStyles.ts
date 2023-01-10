export const getLogoStyles = (name: string) => {
  const projects = new Map([
    [
      "Crunch Fitness++",
      "hover:-rotate-[30deg] transition ease-out delay-150 duration-300",
    ],
    ["Algorithms Collection", "hover:scale-105 active:scale-95 transition ease-out duration-300"],
  ]);

  if (!projects.has(name)) return "";

  return projects.get(name);
};
