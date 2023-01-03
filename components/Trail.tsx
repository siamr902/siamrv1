import { motion } from "framer-motion";
import { useModalCursor } from "../contexts/ModalCursorContext";

const Trail = () => {
  const { trailPosition, click, cursorMount, cursorHover } = useModalCursor();

  return (
    <>
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={i}
          className={`trail hidden ${
            cursorMount && "sm:inline-flex"
          } dark:bg-sky-300 bg-red-500`}
          style={{
            filter: cursorHover ? "" : "blur(4px)",
            mixBlendMode: cursorHover ? "difference" : "normal",
          }}
          animate={{
            x: cursorHover ? trailPosition.x - 16 : trailPosition.x - 6,
            y: cursorHover ? trailPosition.y - 16 : trailPosition.y - 6,
            scale: click ? 3 : 1,
            width: cursorHover ? "40px" : "10px",
            height: cursorHover ? "40px" : "10px",
            transition: {
              type: "spring",
              mass: 0.6,
              damping: 7,
            },
          }}
        ></motion.div>
      ))}
    </>
  );
};

export default Trail;
