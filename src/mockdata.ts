type WorkExperience = {
  from: string; // format: JUL 2022
  to: string; // format: SEP 2022
  title: string;
  subtitle: string;
  link: string; // url
  description?: string; // my work description of what i did there
};

type Education = {
  from: string; // format: JUL 2022
  to: string; // format: SEP 2022
  title: string; // What title you get after graduating or the name of the online course
  subtitle: string; // the college or the online course platform
  link: string; // url
  description?: string; // my experience there
};

export const workExperience: WorkExperience[] = [
  {
    from: "JUL 2022",
    to: "SEP 2022",
    title: "Software Engineer",
    subtitle: "ABC Tech",
    link: "https://www.abctech.com",
    description:
      "Developed and maintained web applications using the latest technologies.",
  },
  {
    from: "OCT 2022",
    to: "DEC 2022",
    title: "Data Analyst",
    subtitle: "XYZ Corporation",
    link: "https://www.xyzcorp.com",
    description:
      "Analyzed and interpreted large datasets to provide actionable insights for business decision-making.",
  },
  {
    from: "JAN 2023",
    to: "MAR 2023",
    title: "Marketing Intern",
    subtitle: "123 Marketing Agency",
    link: "https://www.123marketingagency.com",
    description:
      "Assisted in developing marketing strategies and executing promotional campaigns.",
  },
];

export const education: Education[] = [
  {
    from: "JUL 2018",
    to: "JUN 2022",
    title: "Bachelor of Science in Computer Science",
    subtitle: "ABC University",
    link: "https://www.abcuniversity.com",
    description:
      "Studied various computer science subjects and gained practical experience through projects and internships.",
  },
  {
    from: "JAN 2023",
    to: "MAR 2023",
    title: "Introduction to Machine Learning",
    subtitle: "XYZ Online Course Platform",
    link: "https://www.xyzonlinecourses.com",
    description:
      "Learned the fundamentals of machine learning and applied them to real-world datasets.",
  },
];
