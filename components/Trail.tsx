import { motion } from "framer-motion";
import { useModalCursor } from "../contexts/ModalCursorContext";

const Trail = () => {
  const { trailPosition, click, cursorMount } = useModalCursor();

  return (
    <>
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={i}
          className={`trail hidden ${cursorMount && "sm:inline-flex"} dark:bg-sky-300 bg-red-500`}
          animate={{
            x: trailPosition.x - 6,
            y: trailPosition.y - 6,
            scale: click ? 3 : 1,
            transition: {
                type: "spring",
                mass: 0.6,
                damping: 7,
            }
          }}
        ></motion.div>
      ))}
    </>
  );
};

export default Trail;
