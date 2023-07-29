import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";
import TimelineElement from "@/components/TimelineElement";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Project from "@/sections/Project";
import {
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
      <div className="snap-start snap-always scroll-mt-[59px] pb-64">
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
          <SectionHeading id="technologies" className=" scroll-mt-[50vh]">
            Technologies
          </SectionHeading>
          <div className=" flex flex-wrap gap-2 lg:gap-3">
            {technologies.map((tech, i) => (
              <Tag
                title={tech.title}
                LeftIcon={
                  <Icon src={tech.icon || ""} className=" w-[14px] h-[14px]" />
                }
                href={tech.link}
                size="sm"
                key={i}
              />
            ))}
          </div>
        </section>
        <div className="mt-16 lg:mt-32">
          <SectionHeading id="projects">Projects</SectionHeading>
        </div>
      </div>

      {projects.map((project, i) => (
        <Project
          index={i}
          {...project}
          key={i}
          technologyTags={project.technologies.slice(0, 4).map((value, i) => {
            return (
              <li key={i}>
                <Tag
                  title={value.title}
                  LeftIcon={
                    <Icon
                      src={value.icon || ""}
                      className=" w-[14px] h-[14px]"
                    />
                  }
                  href={value.link}
                  size="sm"
                />
              </li>
            );
          })}
        />
      ))}

      <div className="snap-start snap-always scroll-mb-32 pt-44">
        <About />
        <Contact />
      </div>
    </main>
  );
}
