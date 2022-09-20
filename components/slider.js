import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import Image from "next/image";
import { Dialog } from "@headlessui/react";


const FIRST_IMAGE = {
  imageUrl: "https://example.com/.../some-image.jpg",
};
const SECOND_IMAGE = {
  imageUrl: "https://example.com/.../some-image-2.jpg",
};

<ReactBeforeSliderComponent
  firstImage={FIRST_IMAGE}
  secondImage={SECOND_IMAGE}
/>;

export default function Slider({isOpen,setIsOpen}) {
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
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
            <Dialog.Title>Complete your order</Dialog.Title>
            
            <div className="">
            <Image  src={FIRST_IMAGE} className="p-20 m-20" width={350} height={300} />
            </div>
           
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
