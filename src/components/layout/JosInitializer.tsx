"use client";

import { useEffect } from 'react';
import JOS from 'jos-animation';
import 'jos-animation/dist/jos.css';

export function JosInitializer() {
  useEffect(() => {
    JOS.init({
      duration: 0.7, // Animation duration in seconds
      once: true,    // Animation will only run once
      // Other options like 'startVisible': 'true', 'intersectionRatio': 0.5 can be added
    });

    // Optional: Refresh JOS on window resize or other events if necessary
    // const handleResize = () => JOS.refresh();
    // window.addEventListener('resize', handleResize);
    // return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null; // This component doesn't render anything visible
}
