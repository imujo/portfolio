import { IconType } from "react-icons";

export type Technology = {
  title: string;
  icon?: IconType;
  href?: string;
};

export type Header = {
  name: string;
  position: string;
  description: string;
};

export type Timeline = {
  id: number;
  from: string;
  to: string;
  title: string;
  subtitle: string;
  description?: string;
  link?: string;
};
