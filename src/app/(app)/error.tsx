"use client";
import { FC } from "react";

interface errorProps {
  error: Error;
  retry: () => void;
}

const error: FC<errorProps> = ({ error, retry }) => {
  return (
    <main className="min-h-[calc(100svh-12rem)] grid place-content-center">
      <h1 className="text-6xl text-gray-800 dark:text-gray-200 ">
        Oops! Something went wrong!
      </h1>
    </main>
  );
};

export default error;
