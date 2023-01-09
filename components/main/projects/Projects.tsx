import { AnimatePresence, motion, Variants } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { projects } from "../../../data/projects";
import Project from "./Project";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useModal } from "../../../contexts/ModalContext";
import { ProjectCircles } from "../blurs/BlurCircles";

const variants: Variants = {
  initial: (direction) => {
    return {
      opacity: 0,
      x: direction === 1 ? -200 : 200,
    };
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
      damping: 6,
      mass: 0.5,
    },
  },
  exit: (direction) => {
    return {
      opacity: 0,
      x: direction === 1 ? 200 : -200,
      transition: {
        ease: "easeOut",
      },
    };
  },
};

const Projects = () => {
  const { theme } = useTheme();
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [animateDirection, setAnimateDirection] = useState<number>(0);

  const { closeModal, showModal } = useModal();

  const navigateNext = () => {
    setAnimateDirection(1);
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    closeModal();
  };

  const navigatePrevious = () => {
    setAnimateDirection(-1);

    if (currentProjectIndex === 0) {
      setCurrentProjectIndex(projects.length - 1);
      return;
    }
    setCurrentProjectIndex((prev) => (prev - 1) % projects.length);
    closeModal();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="w-full min-h-[50vh] flex flex-col space-y-0 md:space-y-10 items-center p-8 mt-10 md:mt-20 overflow-visible relative"
    >
      <ProjectCircles />
      <motion.div
        className={`section-title ${theme === "light" ? "darkbolts" : ""}`}
        whileInView={{ scale: [1, 1.2, 1] }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
      >
        Projects
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="relative w-full flex justify-center items-center"
      >
        <AnimatePresence mode="wait" initial={false} custom={animateDirection}>
          <motion.div
            variants={variants}
            initial="initial"
            animate="show"
            exit="exit"
            key={currentProjectIndex}
            custom={animateDirection}
          >
            {
              projects.map((project) => (
                <Project {...project} key={project.name} />
              ))[currentProjectIndex]
            }
          </motion.div>
        </AnimatePresence>
        <div className="hidden sm:inline-flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-20 bubble-display">
          {projects[currentProjectIndex].bubbleText || "PROJECTS"}
        </div>
        <div
          className="absolute group top-1/2 z-[110] right-0 text-[6vw] md:text-5xl p-1 dark:bg-[#222] bg-gray-100 shadow-sm dark:shadow-md shadow-gray-500 dark:shadow-[#111] rounded-full cursor-pointer transition duration-200 ease-in-out active:scale-95"
          onClick={() => navigateNext()}
        >
          <MdNavigateNext className="dark:text-[#888] text-[#c6cacf] group-active:scale-100 transition duration-200 ease-in-out" />
        </div>
        <div
          onClick={() => navigatePrevious()}
          className="absolute group top-1/2 left-0 z-[110] text-[6vw] md:text-5xl p-1 dark:bg-[#222] bg-gray-100 shadow-sm dark:shadow-md shadow-gray-500 dark:shadow-[#111] rounded-full cursor-pointer transition duration-200 ease-in-out active:scale-95"
        >
          <MdNavigateBefore className="dark:text-[#888] text-[#c6cacf] group-active:scale-100 transition duration-200 ease-in-out" />
        </div>
      </motion.div>
      {/* Hacky way to make sure the buttons don't clip the modal by turning off display when modal is active */}
      {!showModal ? (
        <div className="flex gap-4 items-center flex-wrap -translate-y-1/2">
          {Array.from({ length: projects.length }, (_, i) => (
            <div
              key={projects[i].name}
              className={`w-3 h-3 sm:w-[18px] sm:h-[18px] dark:not-selected-dark not-selected-light rounded-full cursor-pointer ${
                currentProjectIndex === i &&
                "dark:selected-project-dark selected-project-light"
              }`}
              onClick={() => {
                setAnimateDirection(i > currentProjectIndex ? 1 : -1);
                setCurrentProjectIndex(i);
              }}
            ></div>
          ))}
        </div>
      ) : <div className="w-3 h-3 sm:w-[18px] sm:h-[18px]"></div>}
    </motion.div>
  );
};

export default Projects;
