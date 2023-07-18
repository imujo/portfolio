import { FC } from "react";

interface IconProps {
  src: string;
  className?: string;
}

const Icon: FC<IconProps> = async ({ src, className }) => {
  const data = await fetch(src);
  const html = await data.text();
  return (
    <>
      <svg className={className} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default Icon;
