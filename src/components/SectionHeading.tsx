import { FC } from "react";

const SectionHeading = ({ children }: { children?: string }) => {
  return (
    <h3 className="text-3xl lg:text-4xl font-medium text-gray-800 mb-8">
      {children}
    </h3>
  );
};

export default SectionHeading;
