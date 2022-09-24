import React from "react";
import { Icon } from "../../icons/Icon";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex flex-col pt-28 items-center">
        {/* <h1 className="font-amatic  font-bold text-7xl text-black relative">
          100 HANE.ORG
          <span className="absolute top-[2.5rem] left-[6.6rem]">
            <Icon name="heart" />
          </span>
        </h1> */}
        <div className="flex md:w-full justify-center w-40"><img src="/logoo.png" /></div>
      </div>
      <div className="flex justify-around items-center">
        <Icon name="leftCloud" />
        <Icon name="rightCloud" />
      </div>
      <div>
        <Image
      src="/evler.png"
          layout="responsive"
          width={40}
          height={5}
          objectFit="cover"
        />
        {/* <div className="w-full"><img src="/bg.png" /></div> */}
      </div>
    </>
  );
}
