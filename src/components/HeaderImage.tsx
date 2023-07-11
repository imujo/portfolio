import Image from "next/image";
import { FC } from "react";

interface HeaderImageProps {}
// TODO try to make it with Next Image
const HeaderImage: FC<HeaderImageProps> = ({}) => {
  return (
    <div className="relative h-56 w-56 rounded-full headerImageBg flex lg:h-[420px] lg:w-[420px] md:h-64 md:w-64 overflow-visible ">
      <img
        src="/header_img.png"
        alt="portrait"
        className="w-full h-[108.25%] absolute bottom-0 lg:bottom-[-8px] left-1/2 translate-x-[-50.8%] object-cover  "
      />
    </div>
  );
};

export default HeaderImage;
