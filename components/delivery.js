import React from "react";


export default function Delivery(data) {
  const deliveryList = data.data.data.completed_houses
  console.log("list", deliveryList);
  return (
    <section class="mb-12">
    {deliveryList.slice(0,4).map((item) => {
      return (
        <>
          <div
            key={item.id}
            class="bg-white alert alert-dismissible rounded-lg py-8 px-6 text-black md:flex  items-center text-center md:text-left mb-5"
          >
            <div className="md:grid md:grid-cols-5 w-full">
              <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start relative md:mr-32">
                <div className="w-14 md:absolute md:left-0 ">
                  <img
                    src={item.thumbnail}
                    className="border-2 border-white rounded-[5px]"
                  />
                </div>
                <div className="w-14 md:absolute md:left-8 ">
                  <img
                    src={item.thumbnail}
                    className="border-2 border-white rounded-[5px]"
                  />
                </div>
                <div className="w-14 md:absolute md:left-16 ">
                  <img
                    src={item.thumbnail}
                    className="border-2 border-white rounded-[5px]"
                  />
                </div>
              </div>
              <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center  md:justify-start ">
                <div className="flex flex-col">
                  <p className="font-jakarta font-semibold text-xs text-[#57544F]">
                    AD SOYAD
                  </p>
                  <p className="font-jakarta font-normal text-xl text-black">
                  {item.owner}
                  </p>
                </div>
              </div>
              <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start">
                <div className="flex flex-col">
                  <p className="font-jakarta font-semibold text-xs text-[#57544F]">
                    TELEFON
                  </p>
                  <p className="font-jakarta font-normal text-xl text-black">
                    {item.phone}
                  </p>
                </div>
              </div>
              <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start ">
                <div className="flex flex-col">
                  <p className="font-jakarta font-semibold text-xs text-[#57544F]">
                    TADİLAT DURUMU
                  </p>
                  <p className="font-jakarta font-normal text-xl text-black">
                    {item.mod_type.substring(0, 10)}...
                  </p>
                </div>
              </div>
              <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-start">
                <div className="flex flex-col">
                  <p className="font-jakarta font-semibold text-xs text-[#57544F]">
                    MALİYET
                  </p>
                  <p className="font-jakarta font-normal text-xl text-black ">
                    {item.cost}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center md:justify-end md:w-1/4">
              <button
                onClick={() => router.push("/alterationDetail")}
                class="inline-block px-5 py-[10px] bg-white border border-[#BBB8B3] text-black font-medium text-sm leading-tight uppercase rounded-[5px]  hover:bg-[#BBB8B3] hover:text-white focus:outline-none transition duration-150 ease-in-out mr-10"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Detayı Gör
              </button>
              <button
                onClick={() => router.push("/support")}
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

        </>
      );
    })}
  </section>
  );
}
