import { technologies } from "@/mockdata";
import request from "../utils/request";
import {
  EducationData,
  ExperienceData,
  HeaderData,
  TechnologiesData,
} from "./types";

// TODO add validation

export async function getHeader() {
  const headerData = await request<HeaderData>("/header");
  const header = headerData.data.attributes;
  return header;
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
      icon: new URL(
        technologyData.attributes.icon.data.attributes.url,
        process.env.FILES_SERVER_ENDPOINT as string
      ).href,
    };
  });

  return technologies;
}
