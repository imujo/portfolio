import { Header, Timeline } from "@/utils/types";

export interface HeaderData {
  data: {
    attributes: Header;
  };
}

export interface ExperienceData {
  data: {
    attributes: {
      Experience: Timeline[];
    };
  }[];
}

export interface EducationData {
  data: {
    attributes: {
      Education: Timeline[];
    };
  }[];
}

export interface ImageData {
  data: {
    attributes: {
      name: string;
      url: string;
    };
  };
}

export interface TechnologiesData {
  data: {
    attributes: {
      title: string;
      icon: ImageData;
    };
  }[];
}
