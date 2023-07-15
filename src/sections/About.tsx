import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section className="flex md:[&>*]:flex-1 [&_p]:text-sm gap-12 md:gap-0 [&_p]:text-gray-700 dark:[&_p]:text-gray-400 flex-col md:flex-row mt-16 lg:mt-32 ">
      <div className="relative">
        <SectionHeading id="about">About me 👈</SectionHeading>
        <p>
          I am a passionate and dedicated fullstack web developer with a strong
          foundation in both front-end and back-end technologies. With a keen
          eye for design and a love for clean code, I strive to create
          exceptional user experiences and bring ideas to life through elegant
          and efficient web solutions.
        </p>
        <br />
        <p>
          Throughout my career, I have gained extensive experience working on
          diverse projects, collaborating with cross-functional teams, and
          effectively managing timelines and deliverables. Whether it&apos;s
          crafting intuitive user interfaces or architecting robust server-side
          solutions, I am always eager to tackle new challenges and push the
          boundaries of what&apos;s possible.
        </p>
        <img
          src="aboutBorder.svg"
          alt="border"
          className="absolute bottom-[-1rem] left-[-1rem]"
        ></img>
      </div>
      <div className="w-full h-64 md:h-auto">
        <div className="relative md:w-4/5 h-full md:ml-auto ">
          <Image
            src={
              "https://lp-cms-production.imgix.net/2021-06/shutterstockRF_662032261.jpg"
            }
            alt={"me"}
            className="z-[10] rounded-lg object-cover "
            fill
          />
          <div className="absolute h-full w-full rounded-lg bg-emerald-600 bottom-[-1rem] md:left-[-1rem] "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
