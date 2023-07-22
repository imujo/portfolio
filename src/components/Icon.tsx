import { FC } from "react";
interface IconProps {
  src: string;
  className?: string;
}

const getIcon = async (src: string) => {
  const data = await fetch(src);
  const html = await data.text();
  return html;
};

const Icon: FC<IconProps> = async ({ src, className }) => {
  const html = await getIcon(src);

  return (
    <>
      <svg className={className} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default Icon;
