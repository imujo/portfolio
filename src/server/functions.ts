import request from "../utils/request";
import {
  AboutData,
  ContactData,
  EducationData,
  ExperienceData,
  HeaderData,
  ProjectsData,
  Response,
  TechnologyData,
} from "./types";
import {
  About,
  Contact,
  Header,
  Project,
  Technology,
  Timeline,
} from "@/utils/types";
import { getFullFileUrl } from "@/utils/misc";

export async function getHeader(): Promise<Header> {
  const headerData = await request<Response<HeaderData>>("/header");

  if (!headerData.data) throw new Error("HEADER: " + headerData.error.message);

  const header = headerData.data.attributes;
  return header;
}

export async function getAbout(): Promise<About> {
  const aboutData = await request<Response<AboutData>>("/about?populate=*");
  if (!aboutData.data) throw new Error("ABOUT: " + aboutData.error.message);

  const about = {
    description: aboutData.data.attributes.description,
    image: getFullFileUrl(aboutData.data.attributes.image.data.attributes.url),
  };

  return about;
}

export async function getExperience(): Promise<Timeline[]> {
  const experienceData = await request<Response<ExperienceData[]>>(
    "/experiences?populate=*"
  );
  if (!experienceData.data)
    throw new Error("EXPERIANCE: " + experienceData.error.message);

  const experience = experienceData.data.map(
    (value) => value.attributes.timeline
  );
  return experience;
}

export async function getEducation(): Promise<Timeline[]> {
  const educationData = await request<Response<EducationData[]>>(
    "/educations?populate=*"
  );

  if (!educationData.data)
    throw new Error("EDUCATION: " + educationData.error.message);

  const education = educationData.data.map(
    (value) => value.attributes.timeline
  );
  return education;
}

export async function getTechnologies(): Promise<Technology[]> {
  const technologyData = await request<Response<TechnologyData[]>>(
    "/technologies?populate=*"
  );

  if (!technologyData.data)
    throw new Error("TECHNOLOGIES: " + technologyData.error.message);

  const technologies = technologyData.data.map((technologyData) => {
    return {
      link: technologyData.attributes.link,
      title: technologyData.attributes.title,
      icon:
        technologyData.attributes.icon.data?.attributes.url &&
        getFullFileUrl(technologyData.attributes.icon.data?.attributes.url),
    };
  });

  return technologies;
}

export async function getContact(): Promise<Contact[]> {
  const contactData = await request<Response<ContactData[]>>(
    "/contacts?populate=*"
  );

  if (!contactData.data)
    throw new Error("CONTACT: " + contactData.error.message);

  const contacts = contactData.data.map((contact) => {
    return {
      link: contact.attributes.link,
      title: contact.attributes.title,
      icon: getFullFileUrl(contact.attributes.icon.data.attributes.url) || "",
    };
  });

  return contacts;
}

export async function getProjects(): Promise<Project[]> {
  const projectsData = await request<Response<ProjectsData[]>>(
    "/projects?populate=deep"
  );

  if (!projectsData.data)
    throw new Error("PROJECTS: " + projectsData.error.message);

  const projects = projectsData.data.map((project) => {
    return {
      title: project.attributes.title,
      description: project.attributes.description,
      githubLink: project.attributes.githubLink,
      websiteLink: project.attributes.websiteLink,
      technologies: project.attributes.technologies.data.map(
        (technologyData) => {
          return {
            link: technologyData.attributes.link,
            title: technologyData.attributes.title,
            icon:
              technologyData.attributes.icon.data?.attributes.url &&
              getFullFileUrl(
                technologyData.attributes.icon.data?.attributes.url
              ),
          };
        }
      ),
      phoneImage: getFullFileUrl(
        project.attributes.phoneImage.data.attributes.url
      ),
      tabletImage: getFullFileUrl(
        project.attributes.tabletImage.data.attributes.url
      ),
      laptopImage: getFullFileUrl(
        project.attributes.laptopImage.data.attributes.url
      ),
    };
  });

  return projects;
}
