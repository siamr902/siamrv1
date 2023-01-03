import { motion } from "framer-motion";
import React from "react";
import { useProjectModal } from "../../../hooks/useProjectModal";
import { MdOutlineClose } from "react-icons/md";
import { useModalCursor } from "../../../contexts/ModalCursorContext";

type Props = {
  name: string;
  description: string;
  tech: string[];
  demo: string;
  repository: string;
};

const ProjectModal = ({ demo, description, name, repository, tech }: Props) => {
  const { modalRef } = useProjectModal();
  const { closeModal } = useModalCursor();

  return (
    <div
      className="w-[calc(100vw-2rem)] sm:w-[75vw] lg:w-[calc(100vw-20rem)] p-5 fixed text-3xl z-[200] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center space-y-5 dark:bg-[#222] bg-slate-100 shadow-md shadow-gray-400 dark:shadow-black transition"
      ref={modalRef}
    >
      <div className="text-2xl sm:text-3xl uppercase font-headline font-semibold text-[#222222] dark:text-white">{name}</div>
      <div className="flex flex-wrap gap-2 justify-center">
        {tech.map((technology) => (
          <div key={technology} className="text-2xl font-ui lowercase p-2 opacity-70">
            {technology}
          </div>
        ))}
      </div>
      <p className="text-xl leading-10 max-h-[35vh] overflow-y-auto scrollbar-thin font-ui">
        {description}
      </p>
      <div className="flex space-x-[20vw] items-center">
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:text-sky-600 dark:hover:text-sky-400 font-ui text-xl transition duration-200 ease-out"
          >
            VIEW
          </motion.button>
        </a>
        <a href={repository} target="_blank" rel="noopener noreferrer">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:text-red-600 dark:hover:text-red-400 font-ui text-xl transition duration-200 ease-out"
          >
            CODE
          </motion.button>
        </a>
      </div>
      <motion.div
        className="hidden sm:inline-flex absolute top-1 right-4"
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 1 }}
        onClick={() => closeModal()}
      >
        <MdOutlineClose className="w-6 h-6 cursor-pointer" />
      </motion.div>
    </div>
  );
};

export default ProjectModal;
