import SectionHeading from "@/components/SectionHeading";
import TimelineElement from "@/components/TimelineElement";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

export default async function Home() {
  const payload = await getPayloadHMR({ config: configPromise });

  const experience = await payload.findGlobal({ slug: "experience" });
  const education = await payload.findGlobal({ slug: "education" });

  // const experience = await getExperience();
  // const education = await getEducation();
  // const technologies = await getTechnologies();
  // const projects = await getProjects();

  return (
    <main className=" px-6  max-w-5xl   m-auto h-full">
      {/* <Header /> */}
      <section className="flex lg:[&>div]:flex-1 gap-4 lg:items-start lg:justify-between flex-col lg:flex-row lg:mt-8   ">
        <div>
          <SectionHeading id="experience">Experience</SectionHeading>
          {experience.timelineItems?.map((element, i) => {
            return <TimelineElement key={i} {...element} first={i === 0} />;
          })}
        </div>
        <div className="mt-16 lg:mt-0">
          <SectionHeading>Education</SectionHeading>
          {education.timelineItems?.map((element, i) => {
            return <TimelineElement key={i} {...element} first={i === 0} />;
          })}
        </div>
      </section>

      {/* <section className="mt-16 lg:mt-32">
        <SectionHeading id="technologies">Technologies</SectionHeading>
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
      </section> */}
      {/* <section className="mt-16 lg:mt-32 pb-[500px]">
        <SectionHeading id="projects">Projects</SectionHeading>

        {projects.map((project, i) => (
          <Project
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
      </section> */}

      {/* <About />
      <Contact /> */}
    </main>
  );
}
