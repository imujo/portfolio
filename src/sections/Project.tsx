"use client";
// import { twoDigitNumber } from "@/utils/misc";
import { Project as ProjectType, Technology } from "@/utils/types";
import { FC, useRef } from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import {
  MotionValue,
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import useScreenSize from "@/hooks/useScreenSize";
import useSticky from "@/hooks/useSticky";
import DeviceImage from "@/components/DeviceImage";
import { deviceLayout } from "@/utils/deviceLayout";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
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
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //@ts-expect-error
    offset: ["start start", "end start"],
  });

  const titleParallax = useSticky(scrollYProgress);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (scrollYProgress.get() > 0.8 || scrollYProgress.get() < 0.1) {
      console.log("animate");
      animate(scope.current, { opacity: 0 }, { duration: 0.2 });
    } else {
      animate(scope.current, { opacity: 1 }, { duration: 0.2 });
    }
  });

  const screenSize = useScreenSize();

  return (
    <section ref={ref} className="h-[150svh]  w-full relative ">
      <div ref={scope} className="opacity-0">
        <motion.div
          style={{
            top: titleParallax,
            position: "absolute",
            left: "10%",
            marginTop: "20%",
          }}
        >
          <div className=" flex flex-col xl:flex-row xl:justify-between items-center justify-center gap-12 ">
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
          </div>
        </motion.div>
      </div>
      <DeviceImage
        link={phoneImage}
        scrollYProgress={scrollYProgress}
        zIndex={4}
        size={deviceLayout.xl}
        screenSize={screenSize}
      />
      <DeviceImage
        link={phoneImage}
        scrollYProgress={scrollYProgress}
        zIndex={3}
        size={deviceLayout.lg}
        screenSize={screenSize}
      />
      <DeviceImage
        link={phoneImage}
        scrollYProgress={scrollYProgress}
        zIndex={2}
        size={deviceLayout.md}
        screenSize={screenSize}
      />
      <DeviceImage
        link={phoneImage}
        scrollYProgress={scrollYProgress}
        zIndex={1}
        size={deviceLayout.sm}
        screenSize={screenSize}
      />
    </section>
  );
};

export default Project;
