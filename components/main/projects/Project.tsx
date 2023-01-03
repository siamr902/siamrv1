import { AnimatePresence, motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { useModalCursor } from "../../../contexts/ModalCursorContext";
import { getLogoStyles } from "../../../utils/getLogoStyles";
import ProjectModal from "./ProjectModal";

type Props = {
  name: string;
  description: string;
  tech: string[];
  demo: string;
  repository: string;
  projectLogo: StaticImageData | string;
};

const variants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      opacity: { duration: 1 },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const Project = ({
  name,
  description,
  tech,
  demo,
  repository,
  projectLogo,
}: Props) => {
  const logoStyles = getLogoStyles(name);
  const { showModal, toggleModal, projectRef } = useModalCursor();
  
  return (
    <>
      <div
        className="flex flex-col items-center text-center space-y-2 cursor-pointer"
        onClick={() => toggleModal()}
        ref={projectRef}
      >
        {typeof projectLogo === "string" ? (
          <div className={`w-[40vw] h-[40vh] md:w-[300px] md:h-[300px] flex justify-center items-center`}>
            <div className={logoStyles}>{name}</div>
          </div>
        ) : (
          <div className="relative w-[40vw] h-[40vh] md:w-[300px] md:h-[300px]">
            <Image
              src={projectLogo}
              alt={name}
              objectFit="contain"
              layout="fill"
              className={`${logoStyles}`}
            />
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        {showModal ? (
          <motion.div
            key={name}
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <ProjectModal
              demo={demo}
              description={description}
              name={name}
              repository={repository}
              tech={tech}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Project;
