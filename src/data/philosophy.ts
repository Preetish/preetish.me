export interface Principle {
  number: string;
  title: string;
  quote: string;
  body: string;
  takeaway: string;
  tag: string;
}

export const principles: Principle[] = [
  {
    number: "01",
    title: "Simple things, done consistently, drive the greatest impact",
    quote: "The things that drive the most impact for a business are simple. The magic is in performing simple things consistently.",
    body: "In high-growth SaaS, teams often chase complicated growth hacks while neglecting foundational levers: crystal-clear positioning, responsive onboarding, fast page loads, and continuous customer conversations. Consistency on the fundamentals will always compound faster than sporadic brilliance.",
    takeaway: "Master the basics before inventing complexity.",
    tag: "Core Creed",
  },
  {
    number: "02",
    title: "Treat marketing as an engineering feedback loop",
    quote: "Marketing isn't speculation; it's a dynamic system of nodes, bottlenecks, and feedback loops.",
    body: "Starting my career in software engineering at Oracle gave me an architectural perspective on growth. When you instrument each stage with clean telemetry, conversion bottlenecks cease to be guesswork—they become structured engineering problems with measurable solutions.",
    takeaway: "Telemetry turns hunches into predictable systems.",
    tag: "Systems Thinking",
  },
  {
    number: "03",
    title: "Positioning is the true multiplier of product value",
    quote: "The best product doesn't automatically win. The product that explains its differentiated value most clearly does.",
    body: "Feature parity happens fast in software. Lasting defensibility comes from crisp, empathetic positioning that carves out an undeniable point of view. When positioning clicks, CAC drops, sales cycles shorten, and retention naturally follows.",
    takeaway: "Clarity of value beats a longer feature checklist.",
    tag: "Product Marketing",
  },
  {
    number: "04",
    title: "B2B buyers are human beings first",
    quote: "Behind every enterprise buying committee is a person who wants to do great work and feel proud of their tools.",
    body: "Business software doesn't need to read like a robotic corporate manual. Humanized storytelling, empathetic copywriting, and friction-free onboarding outperform buzzword-laden sales pitches every single time.",
    takeaway: "Speak directly to human aspirations, not corporate acronyms.",
    tag: "Empathy & Craft",
  },
];
