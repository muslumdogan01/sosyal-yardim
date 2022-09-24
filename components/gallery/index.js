import React from "react";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="flex md:mt-[8.938rem]">
      <div className="w-full flex md:flex-row flex-col flex-wrap items-center justify-center ">
        <div className="relative w-64 z-40">
          <span className="md:absolute md:border-[7px] md:shadow-xl md:border-white w-full md:left-28 md:-top-5 md:rotate-[-15deg]">
            <img src="/destekDetay1.png" width={242} height={242} />
          </span>
        </div>
        <div className="relative w-64  z-30">
          <span className="md:absolute w-full md:border-[7px] md:shadow-xl md:border-white md:left-10 md:rotate-[9.84deg] ">
            <img src="/destekDetay1.png" width={242} height={242} />
          </span>
        </div>
        <div className="relative w-64  z-20">
          <span className="md:absolute w-full md:border-[7px] md:shadow-xl md:border-white md:-top-5 md:right-30 md:rotate-[-15deg]">
            <img src="/destekDetay1.png" width={242} height={242} />
          </span>
        </div>
        <div className="relative w-64  z-10">
          <span className="md:absolute md:border-[7px] md:shadow-xl md:border-white w-full md:right-20 md:rotate-[-1deg] ">
            <img src="/destekDetay1.png" width={242} height={242} />
          </span>
        </div>
      </div>
    </div>
  );
}
