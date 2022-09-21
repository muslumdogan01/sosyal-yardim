import Head from "next/head";
import { Icon } from "../icons/Icon";
import Image from "next/image";
import { useState } from "react";
import Alteration from "../components/alteration";
import Delivery from "../components/delivery";
import Header from "../components/header";
import Cost from "../components/costStatus";
import Description from "../components/costStatus/description";
import Gallery from "../components/gallery";
export default function Home() {
  const [showHomes, setShowHomes] = useState(true);

  const changeHomes = () => {
    setShowHomes((showHomes = !showHomes));
  };

  return (
    <div className="bg-pageBg w-full h-screen ">
      <Head>
        <title>100 HANE.ORG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER */}
      <header className="w-full flex flex-col">
        <Header />
      </header>
      <div className="container mx-auto pb-48">
        {/* CONTENT */}
        <Cost />
        <Description />

        {/* PHOTO GALLERY */}

        <Gallery />

        {/* HOMES STATUS */}

        <div className="flex flex-col mt-40">
          <div className="flex justify-center items-center mb-8 relative">
            <h1
              onClick={changeHomes}
              className={
                showHomes
                  ? `mr-16 cursor-pointer font-amatic font-bold text-2xl md:text-[40px] text-headerColor `
                  : `mr-16 cursor-pointer font-amatic font-bold text-2xl  md:text-[40px] text-[#57544F] `
              }
            >
              Tadilat Bekleyen Evler
              <span className="fill-[#E03F1E] md:visible hidden"><Icon name="line" /></span>
            </h1>

      

            <h1
              onClick={changeHomes}
              className={
                !showHomes
                  ? `mr-16 cursor-pointer font-amatic font-bold text-2xl  text-[40px]  text-headerColor `
                  : `mr-16 cursor-pointer font-amatic font-bold text-2xl  text-[40px] text-[#57544F] `
              }
            >
              Teslim Edilen Evler
            </h1>
          </div>

          {showHomes ? <Alteration /> : <Delivery />}
        </div>
      </div>
    </div>
  );
}
