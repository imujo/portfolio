"use client";
import { Project as ProjectType } from "@/utils/types";
import { FC, useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import { useAnimate, useMotionValueEvent, useScroll } from "framer-motion";
import DeviceImage from "@/components/DeviceImage";
import { deviceLayout } from "@/utils/deviceLayout";

interface ProjectProps extends ProjectType {
  technologyTags: React.ReactNode;
}

const Project: FC<ProjectProps> = ({
  title,
  description,
  githubLink,
  websiteLink,
  technologyTags,
  phoneXl,
  phoneLg,
  phoneMd,
  phoneSm,
}) => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //@ts-expect-error
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.8 || latest < 0.01) {
      animate(
        scope.current,
        { x: -30, opacity: 0, pointerEvents: "none" },
        { duration: 0.2 }
      );
    } else {
      animate(
        scope.current,
        { x: 0, opacity: 1, pointerEvents: "auto" },
        { duration: 0.2 }
      );
    }
  });

  return (
    <section
      ref={ref}
      className="h-[150svh] pointer-events-none w-full relative "
    >
      <div
        ref={scope}
        className=" top-[15%] pointer-events-none opacity-0 flex md:top-1/4 w-full justify-center max-w-[90%] lg:w-auto  lg:h-full lg:top-0 fixed"
      >
        <div className=" flex flex-col lg:flex-row lg:justify-between items-center justify-center gap-12 ">
          <div className="flex items-center lg:items-start flex-col">
            <h3 className="text-center lg:text-start font-semibold text-2xl md:text-3cl lg:mb-4 text-gray-800 dark:text-white mb-2">
              {title}
            </h3>
            <p className=" text-center max-w-xs lg:max-w-xs lg:text-start text-gray-500 md:text-base mb-6 dark:text-gray-400 text-sm ">
              {description}
            </p>
            <ul className="flex gap-2 flex-wrap justify-center lg:justify-start lg:max-w-xs mb-6 ">
              {technologyTags}
            </ul>

            <hr className="mb-2 lg:mb-4 w-4/5 border-gray-200 dark:border-gray-700 lg:w-full " />
            <ul className="flex justify-around w-4/5 lg:w-full lg:justify-start lg:gap-6 ">
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
      </div>
      <DeviceImage
        link={phoneXl}
        scrollYProgress={scrollYProgress}
        zIndex={4}
        size={deviceLayout.xl}
      />
      <DeviceImage
        link={phoneLg}
        scrollYProgress={scrollYProgress}
        zIndex={3}
        size={deviceLayout.lg}
      />
      <DeviceImage
        link={phoneMd}
        scrollYProgress={scrollYProgress}
        zIndex={2}
        size={deviceLayout.md}
      />
      <DeviceImage
        link={phoneSm}
        scrollYProgress={scrollYProgress}
        zIndex={1}
        size={deviceLayout.sm}
      />
    </section>
  );
};

export default Project;
