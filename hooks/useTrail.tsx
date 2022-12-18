import { useEffect, useState } from "react";

type TrailProps = {
  x: number;
  y: number;
};

export const useTrail = () => {
  const [trailPosition, setTrailPosition] = useState<TrailProps>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const track = (e: MouseEvent) => {
      setTrailPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", track);

    return () => window.removeEventListener("mousemove", track);
  }, []);

  return {
    trailPosition,
  }
};
