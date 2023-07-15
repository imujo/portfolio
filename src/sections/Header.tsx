import Button from "@/components/Button";
import HeaderImage from "@/components/HeaderImage";
import { FC } from "react";
import { IoSend } from "react-icons/io5";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="relative flex flex-col py-12 gap-12 lg:gap-16 items-center  h-[calc(100vh-4rem)] lg:flex-row-reverse lg:justify-between lg:items-center min-h-[800px] lg:min-h-fit  ">
      <HeaderImage />
      <div className="flex flex-col items-center lg:items-start">
        <h1 className=" text-6xl font-bold text-center text-gray-800 mb-4 dark:text-white lg:text-start ">
          Ivo Mujo
        </h1>
        <h2 className=" text-2xl text-center text-gray-600 mb-8 font-light dark:text-gray-300 lg:text-start ">
          Full-Stack Web Developer
        </h2>
        <p className=" text-base font-light text-gray-500 text-center dark:text-gray-400 max-w-lg mb-16 lg:text-start">
          I&apos;m a passionate Full-Stack web developer driven by my love for
          coding and creating exceptional user experiences
        </p>

        <div className="flex gap-4">
          <Button title="Contact me" RightIcon={IoSend} />
          <Button title="See my work" variant="outline" />
        </div>
      </div>
      <div className="w-3/5 h-3/5 z-[-1] absolute absolute-center bblur2"></div>
    </header>
  );
};

export default Header;
