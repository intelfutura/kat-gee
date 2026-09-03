export const site = {
  name: "Kat Gee",
  title: "Kat Gee — Designer & Developer of Smart Business Websites",
  description:
    "Strategy, design and technology for businesses that want more from their digital presence. Websites that look exceptional, feel effortless, and create measurable value.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://katgee.com",
  locale: "en",
  keywords: [
    "web designer",
    "web developer",
    "WordPress developer",
    "Elementor designer",
    "Framer designer",
    "website designer",
    "smart websites",
    "business websites",
    "website redesign",
    "conversion-focused websites",
  ],
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/start", label: "Start a project" },
] as const;

export const approach = [
  {
    number: "01",
    title: "Understand",
    text: "Learn the business, the audience, the goals, and the context the site has to live in.",
  },
  {
    number: "02",
    title: "Diagnose",
    text: "Find the friction: confusion, missed opportunity, weak positioning, and experiences that ask too much of people.",
  },
  {
    number: "03",
    title: "Design",
    text: "Develop the visual language, the information architecture, and the interaction model — in that order of honesty.",
  },
  {
    number: "04",
    title: "Build",
    text: "Turn the concept into a fast, responsive, functional digital experience. Beautiful is not a layer on top.",
  },
  {
    number: "05",
    title: "Refine",
    text: "Test, review, and cut until the experience feels inevitable. Detail is not decoration. It is the work.",
  },
] as const;

export const capabilities = [
  {
    title: "Website design",
    text: "Business websites, landing pages, and digital experiences with a point of view.",
  },
  {
    title: "WordPress",
    text: "WordPress and Elementor websites and redesigns — structured, maintainable, and built to last.",
  },
  {
    title: "Custom development",
    text: "Custom websites and web applications when the problem is larger than a template.",
  },
  {
    title: "Framer",
    text: "High-end marketing and interactive websites where motion and precision matter.",
  },
  {
    title: "Smart websites",
    text: "Booking, lead capture, automation, and AI integrations that turn visitors into work.",
  },
  {
    title: "UX / Conversion",
    text: "Information architecture, messaging, user flows, and conversion-focused design.",
  },
] as const;

export const smartFlow = [
  "Visitor",
  "Website",
  "Lead",
  "Booking / Inquiry",
  "Automation",
  "Customer",
] as const;

export const interests = [
  {
    title: "Fashion",
    text: "Cut, cloth, and how a look holds a room.",
  },
  {
    title: "Food",
    text: "Plating as composition. Rooms that taste like something.",
  },
  {
    title: "Art",
    text: "Work that does not explain itself too quickly.",
  },
  {
    title: "Technology",
    text: "Tools that disappear into the task.",
  },
  {
    title: "Travel",
    text: "Cities as typography. Light as material.",
  },
  {
    title: "Digital culture",
    text: "What is circulating — and what is lasting.",
  },
] as const;
