import { Icon } from "../icons/Icon";
import { Router, useRouter } from "next/router";

export default function Thanks() {
  const router = useRouter()
  return (
    <>
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

        <div className="flex justify-center pt-16 items-center flex-col">
          <Icon name="thanks" />
          <h1 className="w-2/4 text-center font-amatic  font-bold text-7xl text-black  pt-8">
            Teşekkürler!
          </h1>
          <div className="text-[#57544F] font-normal text-base font-jakarta px-5 text-center pt-5">
            Bir yardım sever olarak bize destek olduğun için çok teşekkür
            ederiz.
            <p className="text-[#57544F] font-normal text-base font-jakarta text-center pt-5">
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </div>
          <div className="w-full flex justify-center items-center pt-12">
            <button
            onClick={()=>router.push("/")}
              type="submit"
              class="py-3 w-[18.75rem] text-center px-5 bg-[#92CFA3] text-base font-medium  text-black rounded-[5px] "
            >
              Ana Sayfaya Dön
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
