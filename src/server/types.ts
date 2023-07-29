import { Header, Timeline } from "@/utils/types";

export type Response<T> = {} & (
  | {
      data: T;
      error: null;
    }
  | {
      data: null;
      error: {
        status: number;
        message: string;
      };
    }
);

export interface HeaderData {
  attributes: Header;
}

export interface ExperienceData {
  attributes: {
    timeline: Timeline;
  };
}

export interface EducationData {
  attributes: {
    timeline: Timeline;
  };
}

export interface ImageData {
  data: {
    attributes: {
      name: string;
      url: string;
    };
  };
}

export interface TechnologyData {
  attributes: {
    title: string;
    icon: ImageData | { data: null };
    link?: string;
  };
}

export interface AboutData {
  attributes: {
    description: string;
    image: ImageData;
  };
}

export interface ContactData {
  attributes: {
    title: string;
    link: string;
    icon: ImageData;
  };
}

export interface ProjectsData {
  attributes: {
    title: string;
    description: string;
    githubLink?: string;
    websiteLink?: string;
    technologies: {
      data: TechnologyData[];
    };
    phoneImage: ImageData;
    tabletImage: ImageData;
    laptopImage: ImageData;
  };
}
