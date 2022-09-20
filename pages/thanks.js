import Link from "next/link";
import React from "react";
import { Icon } from "../icons/Icon";

export default function Thanks() {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-full flex justify-around">
          <div className="pt-[7.438rem]">
            <Icon name="leftCloud" />
          </div>
          <div className="pt-[5rem]">
            <Icon name="rightCloud" />
          </div>
        </div>
      </div>
      {/* BASLIK */}
      <div className="flex justify-center items-center ">
        <h1 className="w-2/4 text-center font-amatic  font-bold text-7xl text-black  pt-8">
          Teşekkürler!
        </h1>
      </div>
    </div>
  );
}
