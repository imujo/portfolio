import SectionHeading from "@/components/SectionHeading";
import TimelineElement from "@/components/TimelineElement";
import { education, workExperience } from "@/mockdata";
import Header from "@/sections/Header";

export default function Home() {
  return (
    <main className=" px-6  max-w-5xl m-auto h-full">
      <Header />
      <section className="flex lg:[&>div]:flex-1 gap-4 lg:items-start lg:justify-between flex-col lg:flex-row lg:mt-8   ">
        <div>
          <SectionHeading>Experience</SectionHeading>
          {workExperience.map((element, i) => {
            return <TimelineElement {...element} first={i === 0} />;
          })}
        </div>
        <div className="mt-16 lg:mt-0">
          <SectionHeading>Education</SectionHeading>
          {education.map((element, i) => {
            return <TimelineElement {...element} first={i === 0} />;
          })}
        </div>
      </section>
    </main>
  );
}
