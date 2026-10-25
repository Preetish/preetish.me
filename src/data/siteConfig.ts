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
  tagline: "Marketing leader with 11+ years of experience driving sustainable growth for modern tech companies.",
  shortBio:
    "An engineer-turned-growth leader blending analytical rigor with creative positioning. Experienced in taking tech companies from zero-to-one traction to millions in ARR.",
  fullBio: [
    "I am a marketing leader with over 11 years of hands-on experience scaling high-growth tech companies. My journey started in computer science and software engineering at Oracle, which instilled in me a deep appreciation for systems thinking, data architecture, and rigorous experimentation.",
    "Over the past decade, I've brought that engineering mindset to growth and GTM—joining Bettermode as employee #2 to build the marketing engine from scratch, scaling ARR into the multi-millions, leading growth at Passage, and accelerating revenue across multiple B2B startups.",
    "Here is what I believe: the things that drive the most impact for a business are simple. The magic is in performing simple things consistently.",
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
      value: "11+",
      subtext: "Years scaling tech companies",
    },
    {
      label: "ARR Scaled",
      value: "$0 → $M+",
      subtext: "From seed to multi-millions",
    },
    {
      label: "PromptCloud Lift",
      value: "200%",
      subtext: "Revenue growth over 3 years",
    },
    {
      label: "TeamWave Launch",
      value: "$800k",
      subtext: "ARR generated in year one",
    },
  ],
};
