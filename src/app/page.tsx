"use client";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import { cn } from "@/utils/misc";
import { useState } from "react";
import { SiTypescript } from "react-icons/si";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={darkMode ? "dark" : ""}>
      <div className=" dark:bg-slate-800 h-screen flex justify-center items-center">
        <Tag title="Typescript" LeftIcon={SiTypescript} />
        <Tag
          title="Typescript"
          LeftIcon={SiTypescript}
          size={"small"}
          href={"https://youtube.com"}
        />
        {/* <img
          src="/blur.png"
          className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[0] pointer-events-none "
        /> */}
      </div>
    </main>
  );
}
