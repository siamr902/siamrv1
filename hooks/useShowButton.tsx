import { useEffect, useState } from "react";

export const useShowButton = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowBtn(true);
        return;
      }
      setShowBtn(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { showBtn };
};
