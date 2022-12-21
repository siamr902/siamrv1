import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Orb from "./Orb";

const OrbCanvas = () => {
  return (
    <div className="hidden sm:inline-flex w-full h-full absolute">
      <Canvas camera={{position: [0, 0, 8]}}>
        <Suspense fallback={null}>
          <Orb />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default OrbCanvas;
