import React from "react";
import { Icon } from "../../icons/Icon";

export default function Cost() {
  return (
    <div className=" flex w-full flex-col md:flex-row justify-center items-center">
      <div className="lg:m-10 lg:p-12 p-8 m-5 rounded-lg bg-buttonBg  flex box-border">
        <div>
          <Icon name="book" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-jakarta font-semibold lg:text-4xl text-xl text-black">
            101
          </span>
          <span className="font-jakarta font-normal text-lg pl-3">
            Tadilat Bekleyen Ev
          </span>
        </div>
      </div>
      <div className="lg:p-12 lg:m-10 p-8 m-5 rounded-lg bg-buttonBg   flex box-border">
        <div>
          <Icon name="home" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-jakarta font-semibold lg:text-4xl text-xl text-black">
            71
          </span>
          <span className="font-jakarta font-normal text-lg pl-3">
            Teslim edilen Ev
          </span>
        </div>
      </div>
      <div className="lg:p-12 lg:m-10 p-8 m-5 rounded-lg bg-buttonBg   flex box-border">
        <div>
          <Icon name="money" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-jakarta font-semibold lg:text-4xl text-xl text-black">
            9,9999
          </span>
          <span className="font-jakarta font-normal text-lg pl-3">
            Toplam Maliyet
          </span>
        </div>
      </div>
    </div>
  );
}
