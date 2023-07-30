export type Technology = {
  title: string;
  icon?: string;
  link?: string;
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

export type About = {
  description: string;
  image: string;
};

export type Contact = {
  title: string;
  link: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  githubLink?: string;
  websiteLink?: string;
  technologies: Technology[];
  phoneXl: string;
  phoneLg: string;
  phoneMd: string;
  phoneSm: string;
};
