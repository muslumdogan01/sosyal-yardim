import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Icon } from "../icons/Icon";
import Link from "next/link";

export default function AlterationDetail() {
  return (
    <>
      <Head>
        <title>Ev Tadilat Detay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full flex justify-between">
        <div className="flex">
          <div>
            <Image src="/detail1.png" width={242} height={300} />
          </div>
          <span className="pt-48">
            <Icon name="leftCloud" />
          </span>
          <div>
            <Image src="/detail2.png" width={350} height={242} />
          </div>
        </div>

        <div className="flex pr-12 pt-11">
          <span className="mr-32">
            <Icon name="rightCloud" />
          </span>
          <Link href="/">
            <span className="w-[50px]  h-[50px] rounded-full flex cursor-pointer justify-center items-center text-[#57544F] text-xl bg-[#57544f33]">
              X
            </span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col pr-20">
            <h1 className="font-amatic font-bold text-7xl text-black">GÜLER TAŞDEMİR</h1>
            <p className="text-[#57544F] font-jakarta font-semibold text-xs pt-5">TADİLAT DURUMU</p>
            <p className="text-black font-jakarta font-normal text-xl">Balkon Tadilatı</p>
            <p className="text-[#57544F] font-jakarta font-semibold text-xs pt-5">Maliyet</p>
            <p className="text-black font-jakarta font-normal text-xl">3.000Tl</p>
            <div className="pt-8"><button className="w-28 h-10 bg-[#E6EEE3] rounded-[5px] text-[#3C4439] text-sm font-jakarta font-medium">Destek Ver</button></div>
          </div>
          <div className="w-[35rem]">
            <p>
              Görüşme müracaatçının 13 yaşındaki kızı Yağmur Hanım ile
              gerçekleştirilmiştir. Yağmur Hanım evde annesi ve 1,5 yaşındaki
              kız kardeşi ile birlikte gecekondu tipi bir evde 500TL kira bedeli
              ödeyerek yaşadıklarını beyan etmiştir. Yağmur Hanım annesi ve
              babasının yeni boşandığını, babasının herhangi bir nafaka
              ödemesinde bulunmadığını, geçimlerini annesinin günlük gittiği
              tarla işleri ve çevre yardımlarını ile sağladıklarını ifade
              etmiştir. Evin genel durumu bir oda, bir mutfak, banyo ve
              tuvaletten oluşmaktadır. Banyo ve tuvalet duvarlarında rutubet
              oluşumu olduğu gözlemlenmiştir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}