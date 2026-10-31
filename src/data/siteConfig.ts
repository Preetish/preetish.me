export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  /** Single source of truth — referenced everywhere instead of hard-coding. */
  yearsExperience: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  avatar: string;
  newsletterUrl: string;
  socials: {
    name: string;
    url: string;
    icon: string;
    username: string;
  }[];
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

const yearsExperience = "15+";

export const siteConfig: SiteConfig = {
  name: "Preetish Panda",
  title: "Preetish Panda — Engineer-turned Growth Leader",
  role: "Engineer-turned Growth Leader",
  yearsExperience,
  avatar: "/images/avatar.jpg",
  tagline:
    "Engineer-turned growth leader. I build growth systems for tech and AI-native companies, along with open-source tools and marketing research.",
  shortBio:
    "Engineer-turned growth leader. Employee #2 at Bettermode, former Director of Growth at Passage, now heading growth at an AI-native legal services firm.",
  fullBio: [
    "Background: Started as a software engineer at Oracle. I still treat funnels like systems to instrument and debug.",
    "Track Record: Employee #2 and first marketing hire at Bettermode. I've led growth from zero to millions in revenue.",
    "Builder & Researcher: I ship open-source MarTech tools and publish peer-reviewed research on customer behavior and growth systems.",
  ],
  newsletterUrl: "https://growthlog.substack.com",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/preetishpanda/",
      icon: "Linkedin",
      username: "preetishpanda",
    },
    {
      name: "Growth Log (Substack)",
      url: "https://growthlog.substack.com",
      icon: "BookOpen",
      username: "growthlog.substack.com",
    },
    {
      name: "Twitter / X",
      url: "https://x.com/Pr33tish",
      icon: "Twitter",
      username: "@Pr33tish",
    },
    {
      name: "GitHub",
      url: "https://github.com/Preetish",
      icon: "Github",
      username: "Preetish",
    },
  ],
  // Revenue figures are intentionally never tied to a company name.
  stats: [
    {
      label: "Zero to scale",
      value: "$0 → $5M+",
      subtext: "ARR, starting as employee #2",
    },
    {
      label: "Revenue growth",
      value: "$7M → $28M",
      subtext: "4x revenue growth",
    },
    {
      label: "Revenue lift",
      value: "300%",
      subtext: "Revenue growth over 3 years",
    },
    {
      label: "Experience",
      value: `${yearsExperience} years`,
      subtext: "Engineering, then growth",
    },
  ],
};
