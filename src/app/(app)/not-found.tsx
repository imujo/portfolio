import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  return (
    <main className="min-h-[calc(100svh-12rem)] grid place-content-center">
      <h1 className="text-6xl text-gray-800 dark:text-gray-200 ">
        404 Not Found
      </h1>
    </main>
  );
};

export default NotFound;
