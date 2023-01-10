import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import hand from "../../../images/pointing-hand.svg";

const Pointer = () => {
  return (
    <motion.div
      className="hidden lg:inline-flex"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        mass: 0.5,
        stiffness: 150,
        damping: 7,
        delay: 2,
      }}
    >
      <Image alt="hand" src={hand} width={250} height={200} />
    </motion.div>
  );
};

export default Pointer;
