import { useState, useEffect } from "react";
import { TABLET_BREAKPOINT } from "../constants";

export const useIsMobile = (breakpoint = TABLET_BREAKPOINT) => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < breakpoint);
      console.log(mql.matches);
    };

    mql.addEventListener("change", onChange);

    setIsMobile(window.innerWidth < breakpoint);

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, [breakpoint]);

  return !!isMobile;
};
