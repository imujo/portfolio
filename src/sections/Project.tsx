"use client";
import { twoDigitNumber } from "@/utils/misc";
import { Project as ProjectType, Technology } from "@/utils/types";
import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Icon from "@/components/Icon";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
function useOpacity(value: MotionValue<number>) {
  return useTransform(value, [0, 0.5, 1], [0, 1, 0]);
}

interface ProjectProps extends ProjectType {
  index: number;
  technologyTags: React.ReactNode;
}

const Project: FC<ProjectProps> = ({
  title,
  description,
  githubLink,
  websiteLink,
  technologyTags,
  phoneImage,
  tabletImage,
  laptopImage,
  index,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const phoneParallax = useParallax(scrollYProgress, 200);
  const tabletParallax = useParallax(scrollYProgress, 600);
  const laptopParallax = useParallax(scrollYProgress, 500);
  // const opacity = useOpacity(scrollYProgress);
  const opacity = 1;

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(title, value);
  });

  // const scale = 2;
  // console.log({
  //   phone: `h: ${124 * scale} w: ${62 * scale}`,
  //   tablet: `h: ${217 * scale} w: ${215 * scale}`,
  //   laptop: `h: ${145 * scale} w: ${110 * scale}`,
  // });
  return (
    <section className="h-screen  w-full snap-start snap-always flex justify-center items-center ">
      {/* <span className="absolute top-6 left-6 font-black text-lg xl:text-xl xl:top-8 xl:left-8 ">
        <span className=" text-gray-700 dark:text-slate-100">
          {twoDigitNumber(index + 1)}
        </span>
        <span className=" text-gray-300 dark:text-slate-700 ml-2">PROJECT</span>
      </span> */}

      <div
        ref={ref}
        className=" flex flex-col xl:flex-row xl:justify-between items-center justify-center gap-12 "
      >
        <div className="flex items-center xl:items-start flex-col">
          <h3 className="text-center xl:text-start font-semibold text-2xl md:text-3xl xl:mb-4 text-gray-800 dark:text-white mb-2">
            {title}
          </h3>
          <p className=" text-center xl:max-w-xs xl:text-start text-gray-500 md:text-base mb-6 max-w-md dark:text-gray-400 text-sm ">
            {description}
          </p>
          <ul className="flex gap-2 flex-wrap justify-center xl:justify-start xl:max-w-xs mb-6 ">
            {technologyTags}
          </ul>

          <hr className="mb-2 xl:mb-4 w-4/5 border-gray-200 dark:border-gray-700 xl:w-full " />
          <ul className="flex justify-around w-4/5 xl:w-full xl:justify-start xl:gap-6 ">
            {githubLink ? (
              <li>
                <a
                  href={githubLink}
                  target="_blank"
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
                  target="_blank"
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

        <div className="relative h-[200px] w-full mt-[10%] sm:h-[300px] xl:w-[600px] xl:mt-0">
          <motion.div
            style={{ y: phoneParallax, x: "-220%", opacity }}
            className="phone "
          >
            <Image src="/phonem.png" alt="phone" fill />
          </motion.div>
          <motion.div
            style={{ y: laptopParallax, x: "-50%", opacity }}
            className=" laptop"
          >
            <Image src="/laptopm.png" alt="laptop" fill />
          </motion.div>
          <motion.div
            style={{ y: tabletParallax, x: "55%", opacity }}
            className="tablet  "
          >
            <Image src="/tabletm.png" alt="tablet" fill />
          </motion.div>
          <div className="w-4/5 h-4/5 absolute top-0 left-0 absolute-center bblur"></div>
        </div>
      </div>
    </section>
  );
};

export default Project;
