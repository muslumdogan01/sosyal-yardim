import React from "react";

const description = {
  personel_description:
    "      Morbi accumsan porta eros ac dignissim. Maecenas eleifend, nibh inaccumsan auctor, est ipsum eleifend erat, eget viverra quam dolorsed elit. Donec ut placerat metus. Etiam bibendum nisi maximus laoreet lacinia. Etiam orci mi, vulputate ac eleifend sed, semper etpurus. Ut hendrerit quis risus at ultricies. Nam sed dui sit ametnibh malesuada malesuada. Duis facilisis vel nisl a facilisis. Sedsagittis volutpat tortor, quis sodales odio malesuada in. Vestibulumante ipsum primis in faucibus orci luctus et ultrices posuerecubilia curae; Aliquam cursus nibh sed risus fermentum, a ultricesturpis eleifend. In vel vestibulum erat. Integer a purus sit amet enim facilisis posuere vel tempor lorem. Sed dignissim enim at miluctus porttitor.",
};

export default function Description() {
  return (
    <div className="w-full flex justify-center md:flex-row flex-col p-10 md:p-0 md:pt-28">
      <h1 className="lg:w-[332px]  md:w-full font-amatic font-bold text-5xl lg:mr-20 text-black leading-[63px]">
        100 ümüzün Akı <br/> 101 Hane
      </h1>
      <p className="lg:w-[567px] md:w-full font-jakarta font-normal text-base text-[#57544F] pt-10 md:pt-0 leading-[34px]">
        {description.personel_description}
      </p>
    </div>
  );
}
