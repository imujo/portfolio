export type Technology = {
  title: string;
  icon?: string;
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

export type About = {
  description: string;
  image: string;
};

export type Contact = {
  title: string;
  url: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  githubLink?: string;
  websiteLink?: string;
  technologies: Technology[];
  phoneImage: string;
  tabletImage: string;
  laptopImage: string;
};
