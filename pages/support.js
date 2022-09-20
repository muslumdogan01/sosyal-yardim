import ImageSlider from "react-image-comparison-slider";
import Image from "next/image";

export default function Support() {
  return (
    <div style={{ width: 700, height: 450 }}>
      <ImageSlider
          image1={<Image src="/gallery2.png" width={500} height={500} />}
          
        onSlide={() => {
          console.log("sliding");
        }}
      />
    </div>
  );
}
{
  /* <Image src={FIRST_IMAGE} width="300" height="500"/> */
}

{
  /* <Image src="/bg.png" width={1440} height={120} /> */
}
