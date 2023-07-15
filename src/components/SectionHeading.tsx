import { cn } from "@/utils/misc";
import { FC, HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h3
      className={cn(
        "text-3xl lg:text-4xl font-medium text-gray-800 mb-8",
        className
      )}
      {...rest}
    >
      {children}
    </h3>
  );
};

export default SectionHeading;
