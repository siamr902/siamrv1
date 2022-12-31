import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const matcher = () => setMatches(media.matches);
    window.addEventListener("resize", matcher);
    return () => window.removeEventListener("resize", matcher);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
