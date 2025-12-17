
import { useEffect, useState } from "react";

export function useMediaQuery() {
  
  const breakpoint = 668
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
      const checkDevice = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      checkDevice();
      window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, [breakpoint])

  return {
    isMobile,
    isDesktop: isMobile === null ? null : !isMobile,
    isReady: isMobile !== null,
  };
}
