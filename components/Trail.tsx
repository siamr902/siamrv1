import { motion } from "framer-motion";
import { useTrail } from "../hooks/useTrail";


const Trail = () => {
  const { trailPosition, click } = useTrail();

  return (
    <>
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={i}
          className="trail hidden sm:inline-flex dark:bg-sky-300 bg-red-500"
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
