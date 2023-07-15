import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";
import TimelineElement from "@/components/TimelineElement";
import { education, projects, technologies, workExperience } from "@/mockdata";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Project from "@/sections/Project";

export default function Home() {
  return (
    <main className=" px-6  max-w-5xl m-auto h-full">
      <Header />
      <section className="flex lg:[&>div]:flex-1 gap-4 lg:items-start lg:justify-between flex-col lg:flex-row lg:mt-8   ">
        <div>
          <SectionHeading id="experience">Experience</SectionHeading>
          {workExperience.map((element, i) => {
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
            <Tag {...tech} key={i} />
          ))}
        </div>
      </section>

      <section className="mt-16 lg:mt-32">
        <SectionHeading id="projects">Projects</SectionHeading>
        {projects.map((project, i) => (
          <Project
            phoneImage={""}
            tabletImage={""}
            laptopImage={""}
            index={i}
            {...project}
            key={i}
          />
        ))}
      </section>
      <About />
      <Contact />
    </main>
  );
}
