import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollDir, setLastScrollDir] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      if(position > scrollPosition) {
        setLastScrollDir("down");
      } else {
        setLastScrollDir("up");
      }
      setScrollPosition(position);
    };    

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [scrollPosition]);

  return lastScrollDir;
}