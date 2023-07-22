import { cn } from "@/utils/misc";
import { VariantProps, cva } from "class-variance-authority";
import { AnchorHTMLAttributes, FC } from "react";

const tagVariants = cva(
  "flex items-center  text-blue-700  [&_path]:fill-blue-700 border-blue-700 cursor-pointer bg-blue-50 hover:bg-emerald-50 dark:bg-slate-750 hover:text-emerald-700  [&_path]:hover:fill-emerald-700 hover:border-emerald-700 transition-colors dark:text-blue-600 [&_path]:dark:fill-blue-600 dark:border-blue-600 dark:hover:border-emerald-600 dark:hover:text-emerald-600 [&_path]:dark:hover:fill-emerald-600 ",
  {
    variants: {
      size: {
        sm: "gap-[2px] px-1 py-[2px] text-xs font-light rounded-lg border-[1px] md:gap-1 md:px-2 md:py-1 md:text-sm",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

interface TagProps
  extends VariantProps<typeof tagVariants>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
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
      {LeftIcon}
      {title}
      {RightIcon}
    </a>
  );
};

export default Tag;
