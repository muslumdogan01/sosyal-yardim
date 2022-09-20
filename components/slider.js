import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Dialog } from "@headlessui/react";

const FIRST_IMAGE = {
  imageUrl: "/gallery1.png",
};
const SECOND_IMAGE = {
  imageUrl: "/gallery2.png",
};

export default function Slider({ isOpen, setIsOpen }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto lg:w-[40rem] md:w-[30rem]  bg-white border-spacing-5 border-white rounded-[20px] p-5">
            <div className="bg-gray-200 rounded-xl">
              <Dialog.Title>
                <div className="flex justify-between mx-10">
                  <span className="py-[10px] px-[20px] rounded-md bg-white mt-3">
                    Önceki
                  </span>
                  <span className="py-[10px] px-[20px] rounded-md bg-white mt-3">
                    Sonraki
                  </span>
                </div>
              </Dialog.Title>

              <div className="">
                <ReactBeforeSliderComponent
                  firstImage={FIRST_IMAGE}
                  secondImage={SECOND_IMAGE}
                />
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
