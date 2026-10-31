export interface Project {
  name: string;
  tagline: string;
  description: string;
  url: string;
  tags: string[];
}

export interface Paper {
  title: string;
  venue: string;
  publisher: string;
  year: string;
  url: string;
  summary: string;
}

export const projects: Project[] = [
  {
    name: "Switchboard",
    tagline: "Open-source inbound lead routing and instant booking",
    description:
      "A self-hosted alternative to tools like Chili Piper. A lead fills in your demo form, rules pick the right rep using form answers and HubSpot data, and the lead books that rep's calendar on the same page. Routing rules live in a YAML file in git, and there are no per-seat fees.",
    url: "https://github.com/Preetish/switchboard",
    tags: ["TypeScript", "Self-hosted", "HubSpot", "Google Calendar", "Apache-2.0"],
  },
];

export const papers: Paper[] = [
  {
    title:
      "Analyzing Customer Conversion Patterns: A Survival Analysis Approach to Multi-Channel Attribution",
    venue: "SASI-ITE 2025",
    publisher: "Atlantis Press",
    year: "2025",
    url: "https://www.atlantis-press.com/proceedings/sasi-ite-25/126020987",
    summary:
      "Applies survival analysis to model time-to-conversion across marketing channels, as an alternative to rule-based attribution.",
  },
  {
    title: "Customer Segmentation via Clustering on Demographics and Purchases",
    venue: "Recent Developments in Computational Finance and Business Analytics",
    publisher: "Springer",
    year: "2025",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-99477-7_39",
    summary:
      "Uses clustering on demographic and transaction data to find customer segments that marketing can act on.",
  },
];
