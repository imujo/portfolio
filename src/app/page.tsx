"use client";
import ProjectSection from "@/components/ProjectSection";
import TimelineElement from "@/components/TimelineElement";
import { cn } from "@/utils/misc";
import { technologies } from "@/utils/types";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={cn(darkMode ? "dark" : "", "px-8 flex justify-center")}>
      <div className=" dark:bg-slate-800 min-h-screen flex flex-col justify-center w-full max-w-5xl items-center   ">
        <ProjectSection
          title="Hair Salon"
          description="The Hair Salon Website features a home page, pricing page, and contact page for a fictional salon. It provides an overview of services, pricing information, and a means to get in touch."
          technologies={technologies}
          githubLink="https://github.com"
          websiteLink="https://hair-salon-six.vercel.app"
          phoneImage="/phone.png"
          tabletImage="/tablet.png"
          laptopImage="/laptop.png"
          index={0}
        />
        <br />
        <ProjectSection
          title="Hair Salon"
          description="The Hair Salon Website features a home page, pricing page, and contact page for a fictional salon. It provides an overview of services, pricing information, and a means to get in touch."
          technologies={technologies}
          githubLink="https://github.com"
          websiteLink="https://hair-salon-six.vercel.app"
          phoneImage="/phone.png"
          tabletImage="/tablet.png"
          laptopImage="/laptop.png"
          index={0}
        />
      </div>
    </main>
  );
}
