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
    description: "Acquisition across organic, paid, and account-based channels.",
    skills: [
      { name: "Full-Funnel Growth", level: "Expert", highlight: true },
      { name: "Account-Based Marketing (ABM)", level: "Expert", highlight: true },
      { name: "Inbound & Technical SEO", level: "Expert", highlight: true },
      { name: "Paid Acquisition (SEM, Paid Social)", level: "Advanced" },
      { name: "Conversion Rate Optimization (CRO)", level: "Advanced" },
      { name: "Referral & Product Loops", level: "Proficient" },
    ],
  },
  {
    title: "Product Marketing & GTM",
    description: "Positioning, messaging, and launches grounded in customer research.",
    skills: [
      { name: "Positioning & Messaging", level: "Expert", highlight: true },
      { name: "Go-to-Market (GTM) Strategy", level: "Expert", highlight: true },
      { name: "Customer Discovery & Research", level: "Advanced" },
      { name: "Competitive Intelligence", level: "Advanced" },
      { name: "Sales Enablement", level: "Advanced" },
      { name: "Product Launches", level: "Expert" },
    ],
  },
  {
    title: "Analytics & Experimentation",
    description: "Multi-channel attribution, cohort analysis, and structured experimentation.",
    skills: [
      { name: "Multi-Channel Attribution", level: "Advanced", highlight: true },
      { name: "Funnel & Cohort Analysis", level: "Advanced", highlight: true },
      { name: "Customer Segmentation & Clustering", level: "Advanced" },
      { name: "A/B & Multivariate Testing", level: "Advanced" },
      { name: "GA4, Tag Manager & Mixpanel", level: "Expert" },
      { name: "SQL & Python Analytics", level: "Proficient" },
    ],
  },
  {
    title: "Engineering & MarTech",
    description: "Marketing automation, CRM architecture, and building open-source tools.",
    skills: [
      { name: "HubSpot & Customer.io", level: "Expert", highlight: true },
      { name: "CRM & Lead Routing Architecture", level: "Expert", highlight: true },
      { name: "TypeScript & Next.js", level: "Proficient" },
      { name: "REST APIs & Webhooks", level: "Proficient" },
      { name: "Headless CMS & Modern Web", level: "Expert" },
      { name: "Lifecycle & Onboarding Systems", level: "Expert" },
    ],
  },
];
