import { useState, useEffect } from "react";
import { TABLET_BREAKPOINT } from "../constants";

export const useIsMobile = (breakpoint = TABLET_BREAKPOINT) => {
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    mql.addEventListener("change", onChange);

    setIsMobile(window.innerWidth < breakpoint);

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, [breakpoint]);

  return !!isMobile;
};
