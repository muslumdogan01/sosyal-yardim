import React from "react";


export default function Delivery() {
  return (
    <section class="mb-12">
    <div class="bg-white alert alert-dismissible rounded-lg py-8 px-6 text-black md:flex justify-between items-center text-center md:text-left">
      <div className="w-auto flex justify-center items-center flex-col md:flex-row">
        <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start relative md:mr-32">
          <div className="w-14 md:absolute md:left-0 ">
          <img src="/destekDetay1.png" className="border-2 border-white rounded-[5px]" />
          </div>
          <div className="w-14 md:absolute md:left-8 ">
          <img src="/destekDetay1.png" className="border-2 border-white rounded-[5px]" />
          </div>
          <div className="w-14 md:absolute md:left-16 ">
          <img src="/destekDetay1.png" className="border-2 border-white rounded-[5px]" />
          </div>
        </div>
        <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center  md:justify-start md:mx-[50px]">
          <div className="flex flex-col">
            <p className="font-jakarta font-semibold text-xs text-[#57544F]">
              AD SOYAD
            </p>
            <p className="font-jakarta font-normal text-xl text-black">
              Tugay Balci
            </p>
          </div>
        </div>
        <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start">
          <div className="flex flex-col">
            <p className="font-jakarta font-semibold text-xs text-[#57544F]">
              TELEFON
            </p>
            <p className="font-jakarta font-normal text-xl text-black">
              05539335203
            </p>
          </div>
        </div>
        <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start md:mx-[50px]">
          <div className="flex flex-col">
            <p className="font-jakarta font-semibold text-xs text-[#57544F]">
              TADİLAT DURUMU
            </p>
            <p className="font-jakarta font-normal text-xl text-black">
              Balkon Tadilatı
            </p>
          </div>
        </div>
        <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start">
          <div className="flex flex-col">
            <p className="font-jakarta font-semibold text-xs text-[#57544F]">
              MALİYET
            </p>
            <p className="font-jakarta font-normal text-xl text-black ">
              8,000Tl
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center md:justify-end md:w-1/4">
        <button
        onClick={()=> router.push("/alterationDetail")}
          class="inline-block px-5 py-[10px] bg-white border border-[#BBB8B3] text-black font-medium text-sm leading-tight uppercase rounded-[5px]  hover:bg-[#BBB8B3] hover:text-white focus:outline-none transition duration-150 ease-in-out mr-10"
          href="#!"
          role="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Detayı Gör
        </button>
        <button
        onClick={()=> router.push("/support")}
          class="inline-block px-5 py-[10px] bg-[#E6EEE3] text-black font-medium text-sm leading-tight uppercase rounded-[5px]  hover:bg-[#D4DCD1]  focus:outline-none  transition duration-150 ease-in-out "
          href="#!"
          role="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Destek Ver
        </button>

      </div>
    </div>
  </section>
  );
}
