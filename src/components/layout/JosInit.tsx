"use client";

import { useEffect } from "react";
// import jos from "jos-animation/dist/jos.js";
// import "jos-animation/dist/jos.css";

import JOS from "jos-animation";

// export function JosInitializer() {
//   useEffect(() => {
//     const jos_options = {
//       debugMode: true,
//       passive: true,
//       animation: "fade",
//       duration: 0.4,
//       rootMargin: "20% 0% 30% 0%",
//     };
//     JOS.init(jos_options);
//   }, []); // Init once on mount

//   useEffect(() => {
//     JOS.init()
//     // jos.refresh();
//   }); // Refresh on every update

//   return null;
// }

export function JOSInit() {
  useEffect(() => {
    JOS.init();
  }, []);
  return null;
}
