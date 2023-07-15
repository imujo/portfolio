import { cn } from "@/utils/misc";
import { FC } from "react";
import { BiLinkExternal } from "react-icons/bi";

interface TimelineElementProps {
  from: string;
  to: string;
  title: string;
  subtitle: string;
  link: string;
  first?: boolean;
  description?: string;
  className?: string;
}

const TimelineElement: FC<TimelineElementProps> = ({
  from,
  to,
  title,
  subtitle,
  link,
  description,
  className,
  first,
  ...rest
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(
        "flex flex-col p-6 relative rounded-2xl hover:shadow-md [&>h4]:hover:text-blue-700 dark:shadow-white/10 dark:[&>h4]:hover:text-blue-600 transition-all cursor-pointer ml-10 ",
        className
      )}
      {...rest}
    >
      <span className="mb-3 font-semibold text-sm text-gray-400 ">
        {from} - {to}
      </span>
      <h4 className=" gap-[6px] mb-2 font-medium text-base text-gray-800 dark:text-white transition-colors">
        {title} · {subtitle}
        <i className="inline-block align-middle mb-[2px] ml-1">
          <BiLinkExternal />
        </i>
      </h4>
      {description ? (
        <p className="max-w-xl font-normal text-sm text-gray-500 dark:text-gray-400 ">
          {description}
        </p>
      ) : null}

      <div
        className={cn(
          "w-1 bg-emerald-600 absolute left-[-22px] bottom-0",
          first ? "h-[86%]" : "h-full"
        )}
      ></div>
      <div className="w-4 h-4 rounded-full bg-emerald-600 absolute left-[-22px] translate-x-[-35%] top-[14%]"></div>
    </a>
  );
};

export default TimelineElement;
