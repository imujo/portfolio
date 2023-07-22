import request from "../utils/request";
import {
  AboutData,
  ContactData,
  EducationData,
  ExperienceData,
  HeaderData,
  ProjectsData,
  TechnologiesData,
} from "./types";
import { About, Contact, Project, Technology } from "@/utils/types";
import { getFullFileUrl } from "@/utils/misc";

// TODO add validation

export async function getHeader() {
  const headerData = await request<HeaderData>("/header");
  const header = headerData.data.attributes;
  return header;
}

export async function getAbout(): Promise<About> {
  const aboutData = await request<AboutData>("/about?populate=*");
  return {
    description: aboutData.data.attributes.description,
    image: getFullFileUrl(aboutData.data.attributes.image.data.attributes.url),
  };
}

export async function getExperience() {
  const experienceData = await request<ExperienceData>(
    "/experiences?populate=*"
  );
  const experience = experienceData.data[0].attributes.Experience;
  return experience;
}

export async function getEducation() {
  const educationData = await request<EducationData>("/educations?populate=*");
  const education = educationData.data[0].attributes.Education;
  return education;
}

export async function getTechnologies(): Promise<Technology[]> {
  const technologiesData = await request<TechnologiesData>(
    "/technologies?populate=*"
  );

  const technologies = technologiesData.data.map((technologyData) => {
    return {
      href: technologyData.attributes.href,
      title: technologyData.attributes.title,
      icon: getFullFileUrl(technologyData.attributes.icon.data.attributes.url),
    };
  });

  return technologies;
}

export async function getContact() {
  const contactData = await request<ContactData>("/contacts?populate=*");

  const contacts: Contact[] = contactData.data.map((contact) => {
    return {
      url: contact.attributes.url,
      title: contact.attributes.title,
      icon: getFullFileUrl(contact.attributes.icon.data.attributes.url),
    };
  });

  return contacts;
}

export async function getProjects() {
  const projectsData = await request<ProjectsData>("/projects?populate=deep");

  const projects: Project[] = projectsData.data.map((project) => {
    return {
      title: project.attributes.title,
      description: project.attributes.description,
      githubLink: project.attributes.githubLink,
      websiteLink: project.attributes.websiteLink,
      technologies: project.attributes.technologies.data.map(
        (technologyData) => {
          return {
            href: technologyData.attributes.href,
            title: technologyData.attributes.title,
            icon: getFullFileUrl(
              technologyData.attributes.icon.data.attributes.url
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
