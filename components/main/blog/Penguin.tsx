import { motion } from "framer-motion";
import React from "react";
import penguin from "../../../images/bookworm_penguin.svg";
import star from "../../../images/goldstar.svg";
import Image from "next/image";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Penguin = () => {
  const md = useMediaQuery("(max-width: 1023px)");
  const xl = useMediaQuery("(min-width: 1536px)");
  return (
    <motion.div
      className="hidden sm:inline-flex"
      initial={{ x: 100, rotate: 0, opacity: 0 }}
      whileInView={{ x: 0, rotate: -360, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 1,
        type: "spring",
        damping: 8,
        mass: 2,
        stiffness: 50,
      }}
    >
      <div className="relative">
        <motion.div whileHover={{ scaleY: [1, 1.2, 1] }} whileTap={{ y: -15 }}>
          {md ? (
            <Image alt="penguin" src={penguin} width={100} height={100} />
          ) : xl ? (
            <Image alt="penguin" src={penguin} width={150} height={150} />
          ) : (
            <Image alt="penguin" src={penguin} />
          )}
        </motion.div>
        <motion.div
          className="absolute -top-[50%] left-[2%] w-[25px] h-[25px]"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -10, rotate: 45 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 1.5 },
            y: { duration: 3, repeat: Infinity, repeatType: "reverse" },
          }}
        >
          <Image alt="star" src={star} objectFit="contain" layout="fill" />
        </motion.div>
        <motion.div
          className="absolute -top-[65%] left-[35%] w-[35px] h-[35px]"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -10 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 1.5 },
            y: { duration: 3, repeat: Infinity, repeatType: "reverse" },
          }}
        >
          <Image alt="star" src={star} objectFit="contain" layout="fill" />
        </motion.div>
        <motion.div
          className="absolute -top-[30%] left-[30%] w-[20px] h-[20px]"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -10, rotate: -45 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: 3, repeat: Infinity, repeatType: "reverse" },
          }}
        >
          <Image alt="star" src={star} objectFit="contain" layout="fill" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Penguin;
