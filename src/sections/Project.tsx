import { twoDigitNumber } from "@/utils/misc";
import { Technology } from "@/utils/types";
import { FC } from "react";
import Tag from "../components/Tag";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { FiLink } from "react-icons/fi";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  technologies: Technology[];
  githubLink?: string;
  websiteLink?: string;
  phoneImage: string;
  tabletImage: string;
  laptopImage: string;
  index: number;
}

const Project: FC<ProjectProps> = ({
  title,
  description,
  technologies,
  githubLink,
  websiteLink,
  phoneImage,
  tabletImage,
  laptopImage,
  index,
}) => {
  const scale = 2;
  console.log({
    phone: `h: ${156 * scale} w: ${78 * scale}`,
    tablet: `h: ${217 * scale} w: ${215 * scale}`,
    laptop: `h: ${145 * scale} w: ${110 * scale}`,
  });
  return (
    <section className="h-screen  w-full flex flex-col xl:flex-row xl:justify-between items-center justify-center ">
      {/* <span className="absolute top-6 left-6 font-black text-lg xl:text-xl xl:top-8 xl:left-8 ">
        <span className=" text-gray-700 dark:text-slate-100">
          {twoDigitNumber(index + 1)}
        </span>
        <span className=" text-gray-300 dark:text-slate-700 ml-2">PROJECT</span>
      </span> */}

      <div className="flex items-center xl:items-start flex-col">
        <h3 className="text-center xl:text-start font-semibold text-2xl md:text-3xl xl:mb-4 text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className=" text-center xl:max-w-xs xl:text-start text-gray-500 md:text-base mb-6 max-w-md dark:text-gray-400 text-sm ">
          {description}
        </p>
        <ul className="flex gap-2 flex-wrap justify-center xl:justify-start xl:max-w-xs mb-6 ">
          {technologies.slice(0, 4).map((value, i) => {
            return (
              <li key={i}>
                <Tag title={value.title} LeftIcon={value.icon} size="sm" />
              </li>
            );
          })}
        </ul>

        <hr className="mb-2 xl:mb-4 w-4/5 border-gray-200 dark:border-gray-700 xl:w-full " />
        <ul className="flex justify-around w-4/5 xl:w-full xl:justify-start xl:gap-6 ">
          {githubLink ? (
            <li>
              <a
                href={githubLink}
                className="flex items-center gap-2 text-gray-800 dark:text-gray-300 text-sm"
              >
                <BsGithub /> Github
              </a>
            </li>
          ) : null}
          {websiteLink ? (
            <li>
              <a
                href={websiteLink}
                className="flex items-center gap-2 text-gray-800 dark:text-gray-300 text-sm"
              >
                Website <BiLinkExternal />
              </a>
            </li>
          ) : null}
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-800 dark:text-gray-300 text-sm"
            >
              Details <FiLink />
            </Link>
          </li>
        </ul>
      </div>

      <div className="relative  h-[200px] w-full mt-[10%] sm:h-[300px] xl:w-[600px] xl:mt-0">
        <div className="absolute top-1/2 left-1/2 translate-x-[-200%] translate-y-[-40%] z-10 w-[78px] h-[156px] sm:h-[202px] sm:w-[101px] md:h-[265px] md:w-[132px] xl:h-[312px] xl:w-[156px] ">
          <Image src="/phonem.png" alt="phone" fill />
        </div>
        <div className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%] z-20 w-[215px] h-[217px] sm:h-[282px] sm:w-[280px] md:h-[368px] md:w-[365px] xl:h-[434px] xl:w-[430px] ">
          <Image src="/laptopm.png" alt="laptop" fill />
        </div>
        <div className="absolute top-1/2 left-1/2 z-30 translate-x-[40%] translate-y-[-30%] h-[145px] w-[110px] sm:h-[188px] sm:w-[143px] md:h-[246px] md:w-[187px] xl:h-[290px] xl:w-[220px]  ">
          <Image src="/tabletm.png" alt="tablet" fill />
        </div>
        <div className="w-4/5 h-4/5 absolute top-0 left-0 absolute-center bblur"></div>
      </div>
    </section>
  );
};

export default Project;
