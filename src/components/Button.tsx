import { cn } from "@/utils/misc";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, Component, FC } from "react";
import { IconType } from "react-icons";

const buttonVariants = cva(
  "flex items-center font-light hover:translate-y-[-2px] transition-all hover:shadow active:translate-y-0",
  {
    variants: {
      variant: {
        default: " text-white bg-emerald-600 hover:bg-blue-600",
        outline:
          " text-emerald-600 bg-emerald-50 hover:text-blue-600 hover:bg-blue-50 border-2 border-emerald-600 hover:border-blue-600 dark:bg-transparent ",
      },
      size: {
        large: "px-6 py-3 gap-2 rounded-lg text-base",
        small: "px-2 py-1 gap-1 rounded text-sm ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "large",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  title: string;
  LeftIcon?: IconType;
  RightIcon?: IconType;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  title,
  LeftIcon,
  RightIcon,
  className,
  variant,
  size,
  ...rest
}) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant: variant, size: size }),
        className
      )}
      style={{ willChange: "contents" }}
      {...rest}
    >
      {LeftIcon ? <LeftIcon height={16} width={16} /> : null}
      {title}
      {RightIcon ? <RightIcon className=" h-[14px]" /> : null}
    </button>
  );
};

export default Button;
