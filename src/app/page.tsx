import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";
import TimelineElement from "@/components/TimelineElement";
import { projects, technologies } from "@/mockdata";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Project from "@/sections/Project";
import {
  getAbout,
  getEducation,
  getExperience,
  getProjects,
  getTechnologies,
} from "@/server/functions";

export default async function Home() {
  const experience = await getExperience();
  const education = await getEducation();
  const technologies = await getTechnologies();
  const projects = await getProjects();

  return (
    <main className=" px-6  max-w-5xl m-auto h-full">
      <Header />
      <section className="flex lg:[&>div]:flex-1 gap-4 lg:items-start lg:justify-between flex-col lg:flex-row lg:mt-8   ">
        <div>
          <SectionHeading id="experience">Experience</SectionHeading>
          {experience.map((element, i) => {
            return <TimelineElement {...element} first={i === 0} key={i} />;
          })}
        </div>
        <div className="mt-16 lg:mt-0">
          <SectionHeading>Education</SectionHeading>
          {education.map((element, i) => {
            return <TimelineElement key={i} {...element} first={i === 0} />;
          })}
        </div>
      </section>
      <section className="mt-16 lg:mt-32">
        <SectionHeading id="technologies">Technologies</SectionHeading>
        <div className=" flex flex-wrap gap-2 lg:gap-3">
          {technologies.map((tech, i) => (
            <Tag
              title={tech.title}
              href={tech.href}
              LeftIcon={tech.icon}
              key={i}
            />
          ))}
        </div>
      </section>

      <section className="mt-16 lg:mt-32">
        <SectionHeading id="projects">Projects</SectionHeading>
        {projects.map((project, i) => (
          <Project index={i} {...project} key={i} />
        ))}
      </section>
      <About />
      <Contact />
    </main>
  );
}
