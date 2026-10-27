export interface SiteConfig {
  name: string;
  title: string;
  role: string;
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

export const siteConfig: SiteConfig = {
  name: "Preetish Panda",
  title: "Preetish Panda — Full-Stack Marketer & Growth Leader",
  role: "Full-Stack Marketer & Growth Leader",
  avatar: "/images/avatar.jpg",
  tagline: "Marketing leader with 14 years of experience driving sustainable growth for modern tech companies.",
  shortBio:
    "An engineer-turned-growth leader blending analytical rigor with creative positioning. Experienced in taking tech companies from zero-to-one traction to millions in ARR.",
  fullBio: [
    "Background: Engineer from Oracle who brought systems thinking and data architecture to growth.",
    "Track Record: 14 years scaling tech companies—built Bettermode to $10M+ ARR as employee #2, and currently scaling Passage ($6M → $21M ARR).",
    "Philosophy: Outsized impact comes from executing simple things with relentless consistency.",
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
  stats: [
    {
      label: "Experience",
      value: "14",
      subtext: "Years scaling tech companies",
    },
    {
      label: "Passage Scale",
      value: "$6M → $21M",
      subtext: "3.5x ARR expansion at current role",
    },
    {
      label: "Bettermode ARR",
      value: "$0 → $10M+",
      subtext: "From seed to 8-figure revenue",
    },
    {
      label: "PromptCloud Lift",
      value: "300%",
      subtext: "Revenue growth over 3 years",
    },
  ],
};
