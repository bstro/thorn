import { useState, useEffect } from "react";

function useWindowDimensions() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function listener() {
      requestAnimationFrame(() => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      });
    }

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  });

  return { windowWidth, windowHeight };
}

export { useWindowDimensions };
