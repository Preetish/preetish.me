export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  website?: string;
  period: string;
  current?: boolean;
  category: "growth" | "leadership" | "product" | "consulting" | "engineering";
  /** Optional: roles kept confidential render a generic icon instead of a logo. */
  logo?: string;
  logoAlt: string;
  summary: string;
  description: string;
  highlights: string[];
  skills: string[];
  metrics?: string;
}

export const experiences: ExperienceItem[] = [
  {
    // Employer intentionally unnamed until the role is public.
    id: "legal-growth",
    role: "Head of Growth",
    company: "AI-native legal services firm",
    period: "2026 — Present",
    current: true,
    category: "growth",
    logoAlt: "AI-native legal services firm",
    summary:
      "Heading growth at a legal services firm built around AI, collaborating with an in-house team of engineers, designers, and product managers.",
    description:
      "Joined in May 2026 to head growth at a law firm that runs on software and machine learning rather than billable-hour headcount.",
    highlights: [
      "Own growth strategy across acquisition, conversion, and lifecycle.",
      "Work with engineering, design, and product teams to turn software capabilities into growth levers.",
    ],
    skills: [
      "Growth Leadership",
      "AI-Native Services",
      "Legal Tech",
      "Full-Funnel Acquisition",
    ],
  },
  {
    id: "passage-growth",
    role: "Director of Growth",
    company: "Passage",
    period: "2023 — 2026",
    current: false,
    category: "growth",
    logo: "/images/passagehq-logo.jpg",
    logoAlt: "Passage",
    summary:
      "Led growth across acquisition, product-led activation, and lifecycle.",
    description:
      "Joined Passage to head growth, owning the customer journey from first touch through activation and expansion.",
    highlights: [
      "Built organic, paid, and lifecycle channels across the full funnel.",
      "Owned the customer journey from acquisition through activation and expansion.",
      "Designed product-led onboarding and automated lifecycle emails that improved activation.",
      "Worked with product, sales, and engineering to sharpen positioning and ship launches faster.",
    ],
    skills: [
      "Growth Leadership",
      "Full-Funnel Acquisition",
      "GTM Strategy",
      "Product Activation",
      "Lifecycle Marketing",
      "Conversion Optimization",
    ],
  },
  {
    id: "bettermode-marketing",
    role: "Director of Marketing",
    company: "Bettermode Inc.",
    period: "2019 — 2023",
    current: false,
    category: "leadership",
    logo: "/images/bettermode-logo.png",
    logoAlt: "Bettermode",
    summary:
      "Employee #2 and the first marketing hire. Built the marketing function from nothing.",
    description:
      "Joined as employee #2 and built marketing from day zero: inbound demand generation, account-based marketing, product marketing, a company rebrand, and customer acquisition.",
    highlights: [
      "Built the marketing team, systems, and playbooks from scratch as the first marketing hire.",
      "Built an SEO and content program that drove hundreds of thousands of organic visits and qualified pipeline.",
      "Ran account-based campaigns that won high-value enterprise accounts.",
      "Led the company rebrand and product positioning.",
      "Hired and led a team across content, design, and growth.",
    ],
    skills: [
      "Account-Based Marketing (ABM)",
      "SEO & Content",
      "Brand & Positioning",
      "Product Marketing",
      "Team Leadership",
    ],
    metrics: "Employee #2",
  },
  {
    id: "promptcloud-growth",
    role: "Head of Growth (Marketing)",
    company: "PromptCloud Pvt. Ltd.",
    period: "2016 — 2019",
    current: false,
    category: "growth",
    logo: "/images/promptcloud-logo.png",
    logoAlt: "PromptCloud",
    summary:
      "Ran marketing for an enterprise web-data company and grew revenue and pipeline over three years.",
    description:
      "Managed a team of three marketers and owned inbound and outbound marketing, web analytics, and lead generation for enterprise web data extraction.",
    highlights: [
      "Built repeatable inbound and outbound programs that grew revenue year over year for three years.",
      "Ran technical SEO and inbound campaigns that brought in global enterprise customers.",
      "Managed the marketing budget and improved unit economics across paid and content channels.",
    ],
    skills: [
      "Full-Funnel Growth",
      "Team Management",
      "Inbound Marketing",
      "Technical SEO",
      "Enterprise Lead Gen",
    ],
  },
  {
    id: "teamwave-product",
    role: "Product & Marketing Manager",
    company: "TeamWave Inc.",
    period: "2015 — 2016",
    current: false,
    category: "product",
    logo: "/images/teamwave-logo.png",
    logoAlt: "TeamWave",
    summary:
      "First marketing hire. Set up go-to-market in the first year.",
    description:
      "Studied the market, customers, and competitors to build the go-to-market strategy for an all-in-one CRM and project management platform for small businesses.",
    highlights: [
      "Set market positioning and product-led acquisition as the first marketing hire.",
      "Ran customer interviews to sharpen the value proposition and product messaging.",
      "Built automated onboarding emails that improved free-to-paid conversion.",
    ],
    skills: [
      "GTM Strategy",
      "User Research",
      "Product Messaging",
      "Onboarding Automation",
    ],
    metrics: "First marketing hire",
  },
  {
    id: "infosys-consultant",
    role: "Senior Associate Consultant",
    company: "Infosys Ltd.",
    period: "2014 — 2015",
    current: false,
    category: "consulting",
    logo: "/images/infosys-logo.png",
    logoAlt: "Infosys",
    summary:
      "Advised enterprise clients on digital marketing and lifted qualified leads by 30%.",
    description:
      "Translated marketing requirements into technical solutions for client and internal development teams, connecting enterprise marketing tools to CRM systems.",
    highlights: [
      "Advised multinational enterprise clients on digital marketing transformation.",
      "Increased qualified leads by 30% through full-funnel optimization.",
      "Connected business strategy with engineering architecture.",
    ],
    skills: [
      "Digital Strategy",
      "Enterprise Consulting",
      "MarTech Integration",
      "Tech Architecture",
    ],
    metrics: "+30% qualified leads",
  },
  {
    id: "oracle-engineer",
    role: "Software Engineer",
    company: "Oracle Financial Services Software",
    period: "2010 — 2012",
    current: false,
    category: "engineering",
    logo: "/images/oracle-logo.png",
    logoAlt: "Oracle",
    summary:
      "Built features for Oracle's financial analytics platform. Won the 'i-Appreciate' award in my first year.",
    description:
      "Built core modules and analytics features for financial services software, shipping releases with cross-functional teams.",
    highlights: [
      "Received the 'i-Appreciate' award in my first year for engineering delivery.",
      "Built analytics and reporting components for enterprise financial clients.",
      "Learned to think in systems and data, a habit I still bring to growth work.",
    ],
    skills: [
      "Software Engineering",
      "Financial Analytics",
      "Data Systems",
    ],
    metrics: "i-Appreciate Award",
  },
];
