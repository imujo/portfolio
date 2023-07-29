"use client";
import { FC } from "react";

interface errorProps {
  error: Error;
  retry: () => void;
}

const error: FC<errorProps> = ({ error, retry }) => {
  return <div>{error.message}</div>;
};

export default error;
