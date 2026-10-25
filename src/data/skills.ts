export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Growth & Acquisition",
    description: "Multi-channel engines that drive sustainable, scalable pipeline.",
    skills: [
      { name: "Full-Funnel Growth", level: "Expert", highlight: true },
      { name: "Account-Based Marketing (ABM)", level: "Expert", highlight: true },
      { name: "Inbound & Technical SEO", level: "Expert", highlight: true },
      { name: "Paid Acquisition (SEM, Paid Social)", level: "Advanced" },
      { name: "Conversion Rate Optimization (CRO)", level: "Advanced" },
      { name: "Viral & Referral Loops", level: "Proficient" },
    ],
  },
  {
    title: "Product Marketing & GTM",
    description: "Aligning product capabilities with real customer problems and distinct positioning.",
    skills: [
      { name: "Positioning & Messaging", level: "Expert", highlight: true },
      { name: "Go-to-Market (GTM) Strategy", level: "Expert", highlight: true },
      { name: "Customer Discovery & Personas", level: "Advanced" },
      { name: "Competitive Intelligence", level: "Advanced" },
      { name: "Sales Enablement", level: "Advanced" },
      { name: "Product Launch Orchestration", level: "Expert" },
    ],
  },
  {
    title: "Analytics & Experimentation",
    description: "Hypothesis-driven iteration supported by solid data architecture.",
    skills: [
      { name: "Attribution Modeling", level: "Advanced", highlight: true },
      { name: "Funnel & Cohort Analysis", level: "Advanced" },
      { name: "A/B & Multivariate Testing", level: "Advanced" },
      { name: "Google Analytics 4 & Tag Manager", level: "Expert" },
      { name: "Product Analytics (Mixpanel/Amplitude)", level: "Advanced" },
      { name: "SQL & Data Extraction", level: "Proficient" },
    ],
  },
  {
    title: "Technical & MarTech",
    description: "Bridging the gap between engineering systems and modern marketing tech stacks.",
    skills: [
      { name: "Marketing Automation (HubSpot, Customer.io)", level: "Expert", highlight: true },
      { name: "CRM Architecture & Lifecycle Drips", level: "Expert" },
      { name: "HTML, CSS & Modern Web", level: "Advanced" },
      { name: "REST APIs & Webhooks", level: "Proficient" },
      { name: "CMS Architectures (WordPress, Headless)", level: "Expert" },
      { name: "Next.js & Frontend Tooling", level: "Proficient" },
    ],
  },
];
