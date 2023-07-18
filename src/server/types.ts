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

export interface AboutData {
  data: {
    attributes: {
      description: string;
      image: ImageData;
    };
  };
}

export interface ContactData {
  data: {
    attributes: {
      title: string;
      url: string;
      icon: ImageData;
    };
  }[];
}

export interface ProjectsData {
  data: {
    attributes: {
      title: string;
      description: string;
      githubLink?: string;
      websiteLink?: string;
      technologies: TechnologiesData;
      phoneImage: ImageData;
      tabletImage: ImageData;
      laptopImage: ImageData;
    };
  }[];
}
