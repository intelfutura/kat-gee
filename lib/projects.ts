export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  role: string;
  year: string;
  concept: boolean;
  summary: string;
  cover: string;
  images: string[];
  accent: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "atelier-valois",
    name: "Atelier Valois",
    category: "Luxury fashion",
    role: "Direction, design, development",
    year: "2026",
    concept: true,
    summary:
      "An editorial house site that sells without raising its voice — lookbook as narrative, commerce as a quiet close.",
    cover: "/images/valois-02.jpg",
    images: ["/images/valois-02.jpg", "/images/valois-01.jpg", "/images/valois-03.jpg"],
    accent: "#1c1712",
    sections: [
      {
        heading: "The challenge",
        body: "Most fashion websites behave like warehouses with better photography. The clothes are treated as inventory. The house is treated as a logo. The visitor is treated as a cart.",
      },
      {
        heading: "The idea",
        body: "Pace the site like a book. Let garments appear as they would in a room — not a grid. When someone is ready, the path to inquire or acquire is exact, not loud.",
      },
      {
        heading: "The experience",
        body: "Slow openings. Large stills. Type that holds the same tension as the clothes. Product moments arrive late, after the house has been felt.",
      },
      {
        heading: "The system",
        body: "Lookbook, trunk-show inquiry, waitlist, and a discreet commerce layer. Built to be maintained season after season without redesigning the personality.",
      },
      {
        heading: "The outcome",
        body: "A concept for brands that want to look expensive and still make the sale. No invented metrics — the work is the argument.",
      },
    ],
  },
  {
    slug: "vesper",
    name: "Vesper",
    category: "Restaurant",
    role: "Design, UX, development",
    year: "2026",
    concept: true,
    summary:
      "A dining room online. Menu as editorial, reservations as hospitality — not software wearing a serif.",
    cover: "/images/vesper-01.jpg",
    images: ["/images/vesper-01.jpg", "/images/vesper-02.jpg", "/images/vesper-03.jpg"],
    accent: "#2a2118",
    sections: [
      {
        heading: "The challenge",
        body: "Reservation websites often feel like the back office leaked onto the internet. The cooking is considered. The site is not.",
      },
      {
        heading: "The idea",
        body: "The website should taste like the room. Type, pacing, and photography do the hosting. Booking is a conversation that happens to be a form.",
      },
      {
        heading: "The experience",
        body: "A menu that reads. A room that is shown without being sold. Private dining treated as a letter, not a package.",
      },
      {
        heading: "The system",
        body: "Reservations, waitlist, private-dining inquiry, and kitchen notes to the guest. Notifications that sound like the house, not a SaaS product.",
      },
      {
        heading: "The outcome",
        body: "A concept for restaurants that already know how to host — and want the site to stop undermining that.",
      },
    ],
  },
  {
    slug: "orris",
    name: "Orris",
    category: "Beauty",
    role: "Design, development, e-commerce",
    year: "2026",
    concept: true,
    summary:
      "Fragrance as atmosphere. A shop that behaves like a cabinet, not a catalogue.",
    cover: "/images/orris-02.jpg",
    images: ["/images/orris-02.jpg", "/images/orris-01.jpg", "/images/orris-03.jpg"],
    accent: "#3d2e28",
    sections: [
      {
        heading: "The challenge",
        body: "Independent beauty often inherits the same layout as everything else on the shelf: hero, claims, six-up grid, urgency banner.",
      },
      {
        heading: "The idea",
        body: "Treat scent as a place. Notes, rituals, and the object of the bottle come first. Commerce is present, never frantic.",
      },
      {
        heading: "The experience",
        body: "Quiet product pages. Materials shown in real light. Copy that describes rather than persuades. The cart does not interrupt the mood.",
      },
      {
        heading: "The system",
        body: "Catalogue, replenishment reminders, sample requests, and a short qualification path for wholesale.",
      },
      {
        heading: "The outcome",
        body: "A concept for beauty brands that want to be found — not fed into a feed.",
      },
    ],
  },
  {
    slug: "lantern-house",
    name: "The Lantern House",
    category: "Hospitality",
    role: "Strategy, design, booking",
    year: "2025",
    concept: true,
    summary:
      "Eight rooms and a site that works like a concierge. Direct booking without the OTA voice.",
    cover: "/images/lantern-01.jpg",
    images: ["/images/lantern-01.jpg", "/images/lantern-02.jpg", "/images/lantern-03.jpg"],
    accent: "#1f2420",
    sections: [
      {
        heading: "The challenge",
        body: "Small hotels lose the relationship to platforms. The website becomes a brochure that sends people elsewhere to book.",
      },
      {
        heading: "The idea",
        body: "Make the site the first member of staff. Rooms as stories. Dates as a conversation. Requests handled before arrival.",
      },
      {
        heading: "The experience",
        body: "Photography that sits still. Copy that tells you what the morning is like. Booking that does not feel like airline software.",
      },
      {
        heading: "The system",
        body: "Availability, deposits, pre-arrival questions, and automated notes to the house. The guest is known before the key.",
      },
      {
        heading: "The outcome",
        body: "A concept for properties that want the booking — and the relationship — to stay in the house.",
      },
    ],
  },
  {
    slug: "halcyon",
    name: "Halcyon",
    category: "Smart business website",
    role: "Strategy, UX, smart website",
    year: "2026",
    concept: true,
    summary:
      "A private practice site that does the first hour of work: clear offer, qualified inquiry, scheduled conversation.",
    cover: "/images/halcyon-01.jpg",
    images: ["/images/halcyon-01.jpg", "/images/halcyon-02.jpg", "/images/halcyon-03.jpg"],
    accent: "#22201c",
    sections: [
      {
        heading: "The challenge",
        body: "Service businesses often publish a brochure and hope. The visitor cannot tell what happens next. The inbox fills with the wrong questions.",
      },
      {
        heading: "The idea",
        body: "The website should do the first hour of work. State the offer. Qualify the inquiry. Book the conversation. Follow up without being asked.",
      },
      {
        heading: "The experience",
        body: "Direct language. No theatre. A path that respects the visitor’s time and the practice’s time equally.",
      },
      {
        heading: "The system",
        body: "Intake, calendar, notifications, and a structured brief the team can act on. Built so automation can deepen later — CRM, estimation, follow-up — without redesigning the front door.",
      },
      {
        heading: "The outcome",
        body: "A concept for practices that want the site to behave like staff, not like stationery.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.slice(0, 4);
