export type ExperienceItem = {
  year: string;
  title: string;
  place?: string;
  note: string;
};

export const experience: ExperienceItem[] = [
  {
    year: "2009",
    title: "Audiobuildamps",
    place: "First significant client",
    note: "Website for an audio-building business — still maintained.",
  },
  {
    year: "2011",
    title: "Smalandskraftan",
    place: "Freelancer",
    note: "Winning project from web design competitions.",
  },
  {
    year: "2011—2014",
    title: "Aetos SG",
    note: "Corporate website built in 2011. It stayed live for three years.",
  },
  {
    year: "2012",
    title: "Global Seven Agency",
    place: "Colorado",
    note: "Professional WordPress development inside an agency.",
  },
  {
    year: "2012",
    title: "VE People",
    note: "WordPress development for a digital team.",
  },
  {
    year: "2012—",
    title: "Independent practice",
    note: "Freelance work and partnerships with multiple agencies. Design, development, and the systems around both.",
  },
];
