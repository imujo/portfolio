import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { getContact } from "@/server/functions";
import { FC } from "react";

interface ContactProps {}

const Contact: FC<ContactProps> = async ({}) => {
  const contacts = await getContact();

  return (
    <section className="mt-16 lg:mt-32 bg-blue-50 dark:bg-slate-700 ring-[1px] ring-blue-200 shadow-inner   dark:ring-slate-500 flex flex-col items-center px-4 py-8 lg:py-16 rounded-lg">
      <SectionHeading className="mb-4" id="contact">
        Contact
      </SectionHeading>
      <span className="text-center text-gray-400 mb-8">
        Send me a message and I&apos;ll be happy to reply!
      </span>
      {contacts.map(({ icon, url, title }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          className="text-gray-600 dark:text-gray-300 fill-gray-600 dark:fill-gray-300 flex gap-2 items-center text-lg mb-4 "
        >
          <Icon src={icon} className=" w-[14px] h-[14px]" />
          {title}
        </a>
      ))}
    </section>
  );
};

export default Contact;
