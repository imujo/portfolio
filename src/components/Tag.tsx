import { cn } from "@/utils/misc";
import { VariantProps, cva } from "class-variance-authority";
import { AnchorHTMLAttributes, FC, ReactComponentElement } from "react";
import { IconType } from "react-icons";

const tagVariants = cva(
  "flex items-center  text-blue-700 border-blue-700 cursor-pointer bg-blue-50 hover:bg-emerald-50 dark:bg-slate-750 hover:text-emerald-700 hover:border-emerald-700 transition-colors dark:text-blue-600 dark:border-blue-600 dark:hover:border-emerald-600 dark:hover:text-emerald-600 ",
  {
    variants: {
      size: {
        lg: "gap-2 px-3 py-2 text-base rounded-lg border-2",
        sm: "gap-[2px] px-1 py-[2px] text-xs font-light rounded-lg border-[1px] md:gap-1 md:px-2 md:py-1 md:text-sm",
      },
    },
    defaultVariants: {
      size: "lg",
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
