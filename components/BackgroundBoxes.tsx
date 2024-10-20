"use client";
import React from "react";
import { Boxes } from "./ui/BackgroundBoxes";
import Footer from "./Footer";

export function BackgroundBoxes() {
  return (
    <div className="h-96 relative w-full overflow-hidden  bg-black-100 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-black-100 z-20 [mask-image:radial-gradient(transparent,transparent)] pointer-events-none" />

      <Boxes />
      <div className="mt-4 justify-center  w-full h-full pt-4">
      <Footer />

      </div>
    </div>
  );
}
