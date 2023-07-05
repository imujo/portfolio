import { cn } from "@/utils/misc";
import { VariantProps, cva } from "class-variance-authority";
import { AnchorHTMLAttributes, FC, ReactComponentElement } from "react";
import { IconType } from "react-icons";

const tagVariants = cva(
  "flex items-center border-2 text-blue-700 border-blue-700 cursor-pointer bg-blue-50 hover:bg-emerald-50 dark:bg-slate-750 hover:text-emerald-700 hover:border-emerald-700 transition-colors dark:text-blue-600 dark:border-blue-600 dark:hover:border-emerald-600 dark:hover:text-emerald-600 ",
  {
    variants: {
      size: {
        large: "gap-2 px-3 py-2 text-base rounded-md",
        small: "gap-1 px-2 py-1 text-sm rounded",
      },
    },
    defaultVariants: {
      size: "large",
    },
  }
);

interface TagProps
  extends VariantProps<typeof tagVariants>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  LeftIcon?: IconType;
  RightIcon?: IconType;
  className?: string;
  href?: string;
}

const Tag: FC<TagProps> = ({
  title,
  LeftIcon,
  RightIcon,
  size,
  className,
  href,
  ...rest
}) => {
  return (
    <a
      href={href}
      className={cn(tagVariants({ size: size }), className)}
      target="_blank"
      {...rest}
    >
      {LeftIcon ? <LeftIcon /> : null}
      {title}
      {RightIcon ? <RightIcon /> : null}
    </a>
  );
};

export default Tag;
