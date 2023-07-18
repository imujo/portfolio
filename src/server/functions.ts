import { technologies } from "@/mockdata";
import request from "../utils/request";
import {
  AboutData,
  ContactData,
  EducationData,
  ExperienceData,
  HeaderData,
  TechnologiesData,
} from "./types";
import { About, Contact } from "@/utils/types";
import { getFullFileUrl } from "@/utils/misc";

// TODO add validation

export async function getHeader() {
  const headerData = await request<HeaderData>("/header");
  const header = headerData.data.attributes;
  return header;
}

export async function getAbout(): Promise<About> {
  const headerData = await request<AboutData>("/about?populate=*");
  return {
    description: headerData.data.attributes.description,
    image: getFullFileUrl(headerData.data.attributes.image.data.attributes.url),
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

export async function getTechnologies() {
  const technologiesData = await request<TechnologiesData>(
    "/technologies?populate=*"
  );

  const technologies = technologiesData.data.map((technologyData) => {
    return {
      href: "", // TODO add to strapi and here
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
