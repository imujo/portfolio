"use client";
import Button from "@/components/Button";
import { cn } from "@/utils/misc";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={darkMode ? "dark" : ""}>
      <div className=" dark:bg-slate-800 h-screen flex justify-center items-center">
        <Button
          title="Dark Mode"
          RightIcon={IoSend}
          variant={"outline"}
          onClick={() => setDarkMode((prev) => !prev)}
        />
        <Button
          title="Dark Mode"
          variant="outline"
          size={"small"}
          RightIcon={IoSend}
          onClick={() => setDarkMode((prev) => !prev)}
        />
        {/* <img
          src="/blur.png"
          className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[0] pointer-events-none "
        /> */}
      </div>
    </main>
  );
}
