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
    quote: "The levers that move a business most are usually simple. The hard part is doing them every week.",
    body: "Teams often reach for clever growth hacks before fixing the basics: clear positioning, fast pages, straightforward onboarding, and regular conversations with customers. Consistent work on the fundamentals compounds better than one-off campaigns.",
    takeaway: "Master the basics before adding complexity.",
    tag: "Core Creed",
  },
  {
    number: "02",
    title: "Treat marketing as an engineering feedback loop",
    quote: "A funnel isn't guesswork. It's a system of inputs, bottlenecks, and feedback loops.",
    body: "Starting my career in software engineering at Oracle shaped how I look at growth. When each stage is instrumented cleanly, conversion drops stop being mysteries and become concrete problems you can isolate and test.",
    takeaway: "Good telemetry turns hunches into testable hypotheses.",
    tag: "Systems Thinking",
  },
  {
    number: "03",
    title: "Positioning multiplies product value",
    quote: "The best product doesn't win by default. The product whose value is easiest to understand does.",
    body: "Features get copied quickly. Durable advantage comes from clear positioning that states who the product is for and why it matters. When positioning clicks, acquisition costs drop, sales cycles shorten, and retention improves.",
    takeaway: "Clarity beats a longer feature checklist.",
    tag: "Product Marketing",
  },
  {
    number: "04",
    title: "B2B buyers are people first",
    quote: "Behind every buying committee is a person trying to do good work without wasting time.",
    body: "Business software doesn't need to read like a corporate manual. Plain language, honest product demos, and low-friction onboarding work better than buzzwords.",
    takeaway: "Write for people, not acronyms.",
    tag: "Empathy & Craft",
  },
];
