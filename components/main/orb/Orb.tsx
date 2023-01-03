import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { MathUtils, Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import { fragmentShader } from "./fragmentShader";
import { vertexShader } from "./vertexShader";

const Orb = () => {
  const meshRef = useRef<Mesh>(null!);
  const hover = useRef<boolean>(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime();
  //   meshRef.current.rotation.y = elapsedTime / 1.5;
  // });

  useFrame(({ clock }) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_intensity.value = MathUtils.lerp(
        (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_intensity.value,
        hover.current ? 0.6 : 0.15,
        0.02
      );
    }
  });

  return (
    <>
      <mesh
        ref={meshRef}
        scale={2.05}
        onPointerOver={() => (hover.current = true)}
        onPointerOut={() => (hover.current = false)}
        position={[0, 0, 0]}
      >
        <icosahedronBufferGeometry args={[2, 20]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />

        <OrbitControls enablePan enableZoom={false} rotateSpeed={0.6} />
      </mesh>
    </>
  );
};

export default Orb;
