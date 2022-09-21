import React from "react";
import Image from "next/image";

export default function Delivery() {
  return (
    <>

      <div className='bg-white flex justify-evenly md:flex-row flex-col  rounded-xl mb-5'>
        <div className='flex items-center py-5'>
        <Image src="/gallery2.png" width={60} height={60} />
       <div className='flex flex-col'>
          <p className='font-jakarta font-semibold text-xs text-[#57544F]'>AD SOYAD</p>
          <p className='font-jakarta font-normal text-xl text-black'>Muslum Dogan</p>
       </div>
       <div className='flex flex-col px-12'>
          <p className='font-jakarta font-semibold text-xs text-[#57544F]'>TELEFON</p>
          <p className='font-jakarta font-normal text-xl text-black'>05539335203</p>
       </div>
       <div className='flex flex-col'>
          <p className='font-jakarta font-semibold text-xs text-[#57544F]'>TADİLAT DURUMU</p>
          <p className='font-jakarta font-normal text-xl text-black'>Balkon Tadilatı</p>
       </div>
       <div className='flex flex-col md:px-12'>
          <p className='font-jakarta font-semibold text-xs text-[#57544F]'>MALİYET</p>
          <p className='font-jakarta font-normal text-xl text-black '>8,000Tl</p>
       </div>
        </div>
        <div className='flex items-center'>
          <button onClick={()=> router.push("/alterationDetail")} className='bg-white border border-[#BBB8B3] rounded-md w-28 h-10 mr-5'>
            Detayı Gör
          </button>
          <button onClick={()=> router.push("/support")} className='bg-[#E6EEE3] border border-[#BBB8B3] rounded-md w-28 h-10 '>Destek Ver</button>
         
        </div>
    </div>
    </>
  );
}
