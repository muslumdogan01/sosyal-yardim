import React from "react";
import Image  from "next/image";

export default function Gallery() {
  return (
    <div className="flex justify-center mt-28">
      <div className="flex min-w-max">
        <h1 className="font-jakarta font-normal text-lg text-black">
          Güler Taşdemir
        </h1>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center justify-center">
        <div className="-rotate-[15deg] z-40">
          <Image src="/destekDetay1.png" width={242} height={242} />
        </div>
        <div className="rotate-[10deg] z-30 ">
          <Image src="/destekDetay1.png" width={242} height={242} />
        </div>
        <div className="-rotate-[15deg] z-10">
          <Image src="/destekDetay1.png" width={242} height={242} />
        </div>
        <div className="-rotate-[1deg] z-0">
          <Image src="/destekDetay1.png" width={242} height={242} />
        </div>
      </div>
    </div>
  );
}
