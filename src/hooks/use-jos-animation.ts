"use client";

import { useEffect, useRef } from 'react';
import JOS from 'jos-animation';

export function useJOSAnimation() {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      // Initialize JOS once
      JOS.init({
        duration: 0.8,
        once: true,
        threshold: 0.3,
        timingFunction: "ease-out",
        mirror: false,
        startVisible: false,
        intersectionRatio: 0.3,
      });
      
      isInitialized.current = true;
    }

    // Refresh animations for new elements
    JOS.refresh();
  }, []);

  return {
    refresh: () => JOS.refresh(),
    reinit: () => {
      JOS.init({
        duration: 0.8,
        once: true,
        threshold: 0.3,
        timingFunction: "ease-out",
        mirror: false,
        startVisible: false,
        intersectionRatio: 0.3,
      });
    }
  };
}
