export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  website?: string;
  period: string;
  current?: boolean;
  category: "growth" | "leadership" | "product" | "consulting" | "engineering";
  logo: string;
  logoAlt: string;
  summary: string;
  description: string;
  highlights: string[];
  skills: string[];
  metrics?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "passage-growth",
    role: "Director of Growth",
    company: "Passage",
    website: "https://passage.com",
    period: "2023 — Present",
    current: true,
    category: "growth",
    logo: "/images/passagehq-logo.jpg",
    logoAlt: "Passage",
    summary:
      "Leading growth across the full acquisition funnel, product-led activation, and lifecycle execution.",
    description:
      "Joined Passage to head growth. Focused on building repeatable acquisition flywheels, driving product-led activation, and optimizing the customer journey from first touch to expansion.",
    highlights: [
      "Accelerated full-funnel acquisition by building high-velocity organic, paid, and lifecycle growth channels.",
      "Own the end-to-end customer journey across acquisition, activation, and product expansion.",
      "Architected product-led onboarding sequences and automated lifecycle loops that improved user activation.",
      "Collaborate closely with product, sales, and engineering to sharpen positioning and accelerate GTM velocity.",
    ],
    skills: [
      "Growth Leadership",
      "Full-Funnel Acquisition",
      "GTM Strategy",
      "Product Activation",
      "Lifecycle Loops",
      "Conversion Optimization",
    ],
  },
  {
    id: "bettermode-marketing",
    role: "Director of Marketing",
    company: "Bettermode Inc.",
    website: "https://bettermode.com",
    period: "2019 — 2023",
    current: false,
    category: "leadership",
    logo: "/images/bettermode-logo.png",
    logoAlt: "Bettermode",
    summary:
      "Joined as employee #2 and built the entire marketing organization from scratch, driving zero-to-one category leadership.",
    description:
      "Built the marketing foundations from day zero as employee #2. Handled everything from inbound demand generation and account-based marketing (ABM) to product marketing, company rebranding, and customer acquisition.",
    highlights: [
      "Joined as marketing employee #2 and built the marketing department, systems, and playbooks from scratch.",
      "Architected an organic content and SEO engine that drove hundreds of thousands of organic visits and qualified pipeline.",
      "Executed targeted Account-Based Marketing (ABM) plays converting high-value enterprise accounts.",
      "Recruited, led, and mentored a cross-functional marketing team across content, design, and growth.",
    ],
    skills: [
      "Employee #2",
      "0 → 1 Building",
      "Account-Based Marketing (ABM)",
      "Inbound Flywheel",
      "Brand & Positioning",
      "Team Leadership",
    ],
  },
  {
    id: "promptcloud-growth",
    role: "Head of Growth (Marketing)",
    company: "PromptCloud Pvt. Ltd.",
    website: "https://promptcloud.com",
    period: "2016 — 2019",
    current: false,
    category: "growth",
    logo: "/images/promptcloud-logo.png",
    logoAlt: "PromptCloud",
    summary:
      "Developed and executed marketing plans resulting in substantial multi-year revenue and pipeline expansion.",
    description:
      "Managed a dedicated team of 3 marketers and oversaw all inbound and outbound marketing initiatives, web analytics, and lead generation pipelines for enterprise web data extraction.",
    highlights: [
      "Achieved compounding growth over a 3-year horizon through repeatable inbound and outbound growth playbooks.",
      "Spearheaded targeted inbound marketing and technical SEO campaigns attracting global enterprises.",
      "Managed marketing budget and optimized unit economics across paid acquisition and content distribution.",
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
    website: "https://teamwave.com",
    period: "2015 — 2016",
    current: false,
    category: "product",
    logo: "/images/teamwave-logo.png",
    logoAlt: "TeamWave",
    summary:
      "Joined as the first marketing hire and established the foundational go-to-market engine within the first year.",
    description:
      "Analyzed market trends, customer needs, and competitor landscapes to develop and execute the comprehensive go-to-market (GTM) strategy for an all-in-one small business CRM and project platform.",
    highlights: [
      "Joined as foundational marketing hire to establish market positioning and product-led acquisition.",
      "Conducted in-depth customer interviews to sharpen value proposition and product messaging.",
      "Built automated email onboarding journeys that maximized free-to-paid conversion rates.",
    ],
    skills: [
      "First Marketing Hire",
      "GTM Strategy",
      "User Research",
      "Product Messaging",
      "Onboarding Automation",
    ],
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
      "Consulted enterprise clients on full-funnel digital strategies resulting in a 30% increase in qualified leads.",
    description:
      "Transformed complex marketing requirements into technical solutions for internal and client development teams, connecting enterprise marketing tools with CRM infrastructure.",
    highlights: [
      "Advised multinational enterprise clients on digital marketing transformation.",
      "Delivered a 30% increase in qualified leads through full-funnel optimization.",
      "Bridged business strategy with engineering architecture.",
    ],
    skills: [
      "Digital Strategy",
      "Enterprise Consulting",
      "+30% Qualified Leads",
      "Tech Architecture",
    ],
    metrics: "+30% Qualified Leads lift",
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
      "Built features for Oracle's financial analytics platform and received the 'i-Appreciate' award in the first year.",
    description:
      "Engineered core modules and analytics capabilities for financial services software. Collaborated with cross-functional teams to release mission-critical updates.",
    highlights: [
      "Honored with the 'i-Appreciate' company award in first year for exceptional engineering delivery.",
      "Developed high-precision analytics and reporting components for financial enterprise clients.",
      "Formed strong foundations in software systems, code architecture, and analytical problem-solving.",
    ],
    skills: [
      "Software Engineering",
      "Financial Analytics",
      "i-Appreciate Award",
      "Data Systems",
    ],
    metrics: "i-Appreciate Award Winner",
  },
];
