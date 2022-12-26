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
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    const track = (e: MouseEvent) => {
      setTrailPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", track);

    const handleClick = () => {
        setClick(true);
        setTimeout(() => setClick(false), 100);
    }
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", track);
      window.removeEventListener("click", handleClick)
    };
  }, []);

  return {
    trailPosition,
    click,
  };
};
