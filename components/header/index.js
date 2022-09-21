import React from "react";
import { Icon } from "../../icons/Icon";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex flex-col pt-28 items-center">
        <h1 className="font-amatic  font-bold text-7xl text-black relative">
          100 HANE.ORG
          <span className="absolute top-[2.5rem] left-[6.6rem]">
            <Icon name="heart" />
          </span>
        </h1>
      </div>
      <div className="flex justify-around items-center">
        <Icon name="leftCloud" />
        <Icon name="rightCloud" />
      </div>
      <div>
        <Image
          src="/bg.png"
          layout="responsive"
          width={40}
          height={5}
          objectFit="cover"
        />
      </div>
    </>
  );
}
