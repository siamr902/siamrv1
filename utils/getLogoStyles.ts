export const getLogoStyles = (name: string) => {
  const projects = new Map([
    [
      "Crunch Fitness++",
      "hover:-rotate-[30deg] transition ease-out delay-150 duration-300",
    ],
    ["Algorithms Collection", "hover:scale-105 active:scale-95 transition ease-out duration-300"],
    ["SRBLOGS", "text-[14vw] md:text-[110px] lg:text-[144px] font-ceviche uppercase hover:translate-y-[5%] active:scale-105 transition ease-out duration-200 text-black dark:text-white"],
  ]);

  if (!projects.has(name)) return "";

  return projects.get(name);
};
