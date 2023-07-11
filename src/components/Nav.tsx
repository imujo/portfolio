"use client";
import { FC, useState } from "react";
import Button from "./Button";
import { AiOutlineMenu } from "react-icons/ai";
import { cn } from "@/utils/misc";
import Link from "next/link";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-16 px-6 max-w-5xl m-auto ">
      <div className="flex items-center justify-between h-full ">
        <Link href="/" className="font-semibold min-w-max md:text-lg">
          Ivo Mujo
        </Link>
        <AiOutlineMenu
          onClick={() => setOpen((prev) => !prev)}
          className="z-20 md:hidden "
        />

        <ul
          className={cn(
            "fixed top-0 left-0 flex dark:bg-slate-700 dark:md:bg-transparent bg-white py-20 px-10 w-screen h-screen gap-10 duration-200 flex-col text-3xl z-10 transition-transform md:translate-x-0 md:flex-row md:text-sm md:gap-10 md:w-full md:h-full md:p-0 md:items-center md:justify-end md:relative md:text-gray-500 dark:md:text-gray-400 font-light hover:[&>li]:text-gray-800 dark:hover:[&>li]:text-gray-200",
            open ? "" : "translate-x-full"
          )}
        >
          <li onClick={() => setOpen(false)}>
            <a href="#experience">Experience</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#technologies">Technologies</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#about">About</a>
          </li>
          <div className="flex-1 md:hidden"></div>
          <li onClick={() => setOpen(false)}>
            <a href="#contact">
              <Button
                title="Contact"
                size="small"
                className="w-full flex justify-center text-2xl py-3 md:text-sm md:w-auto md:py-1 "
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
