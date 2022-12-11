import React, { useEffect, useState } from "react";

export const useScrollVertical = () => {
  const [scrollUp, setScrollUp] = useState<boolean>(false);
  const [scrollVertical, setScrollVertical] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < scrollVertical && window.scrollY > 0) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
      setScrollVertical(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollVertical, setScrollVertical]);

  return { scrollUp };
};
