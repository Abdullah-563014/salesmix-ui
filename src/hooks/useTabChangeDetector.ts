import { useEffect } from "react";

const useTabChangeDetector = (onTabActive, onTabInactive) => {
    useEffect(() => {
      const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          if (onTabActive) onTabActive();
        } else {
          if (onTabInactive) onTabInactive();
        }
      };
  
      document.addEventListener("visibilitychange", handleVisibilityChange);
  
      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }, [onTabActive, onTabInactive]);
  };

  export default useTabChangeDetector;