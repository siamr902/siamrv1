import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Orb from "./Orb";
import { motion } from "framer-motion";

const OrbCanvas = () => {
  return (
    <motion.div
      className="hidden sm:inline-flex w-full h-full absolute"
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 5.3, type: "spring", damping: 6, mass: 2.5, stiffness: 80 }}
    >
      <Canvas camera={{ position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <Orb />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default OrbCanvas;
