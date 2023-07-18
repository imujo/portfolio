import SectionHeading from "@/components/SectionHeading";
import { getAbout } from "@/server/functions";
import Image from "next/image";
import { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = async () => {
  const { description, image } = await getAbout();

  return (
    <section className="flex md:[&>*]:flex-1 [&_p]:text-sm gap-12 md:gap-0 [&_p]:text-gray-700 dark:[&_p]:text-gray-400 flex-col md:flex-row mt-16 lg:mt-32 ">
      <div className="relative">
        <SectionHeading id="about">About me 👈</SectionHeading>
        {description}
        <img
          src="aboutBorder.svg"
          alt="border"
          className="absolute bottom-[-1rem] left-[-1rem]"
        ></img>
      </div>
      <div className="w-full h-64 md:h-auto">
        <div className="relative md:w-4/5 h-full md:ml-auto ">
          <Image
            src={image}
            alt={"me"}
            className="z-[2] rounded-lg object-cover "
            fill
          />
          <div className="absolute h-full w-full rounded-lg bg-emerald-600 bottom-[-1rem] md:left-[-1rem] "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
