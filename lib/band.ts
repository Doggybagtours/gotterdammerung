/** Short introduction for the homepage band section. */
export const bandIntro: string[] = [
  "Götterdämmerung is a deathrock, gothic, post-punk band from Berlin, Germany.",
  "More than three decades after their formation in 1991, the band's sound remains instantly recognizable: dark, atmospheric and uncompromising.",
  "Across twelve releases spanning 34 years, Götterdämmerung has continued to evolve while staying true to the identity that has defined the band since its earliest days.",
];

export type TimelineEntry = {
  year: string;
  headline: string;
  text: string;
};

export const bandPageDescription =
  "Biography of Götterdämmerung — Berlin gothic rock and deathrock band formed in 1991. Formation, influences, history, discography and current activity.";

export const formationSection = {
  title: "Formation",
  paragraphs: [
    "Götterdämmerung was formed in the Netherlands in August 1991, at a moment when the country's underground was still absorbing the aftershocks of post-punk, cold wave and the darker fringes of independent rock.",
    "From the outset, the band pursued a sound that was deliberate, austere and physical — less concerned with fashion than with atmosphere, tension and permanence.",
  ],
};

export const musicalInfluencesSection = {
  title: "Musical Influences",
  intro:
    "The band's early writing drew from overlapping currents within European underground music rather than a single scene or formula.",
};

export const gothicRockSection = {
  title: "Gothic Rock Roots",
  paragraphs: [
    "Gothic rock provided the architectural frame: minor-key melody, cavernous space and a mood that favours weight over speed.",
    "That foundation runs through the entire catalogue — from the 1994 debut on Dion Fortune Records through Urban Gothic (2010) and into the MK II albums Intensity Zone (2022) and A Violent Sky (2024).",
    "Rather than pastiche, Götterdämmerung treated the gothic tradition as a language: one that could carry Berlin intensity, European melancholy and a distinctly personal sense of scale.",
  ],
};

export const deathrockSection = {
  title: "Deathrock Influences",
  paragraphs: [
    "Deathrock gave the band its pulse — the drive, abrasion and refusal to soften edges that separates underground rock from mere mood music.",
    "Early recordings and live performances carried that tension forward: songs built to move, with guitars and drums pushing against the atmospheric backdrop rather than disappearing into it.",
    "The MK II return in 2021 reconnected with that spirit directly. Singles such as Common Existence and Force Systems, and the full-length A Violent Sky, restored a sense of forward motion without abandoning the band's darker register.",
  ],
};

export const bandTimeline: TimelineEntry[] = [
  {
    year: "1991",
    headline: "Band formed in the Netherlands",
    text: "Götterdämmerung is founded in August 1991, establishing a sound shaped by gothic rock, deathrock, post-punk and noise.",
  },
  {
    year: "1994",
    headline: "Debut releases",
    text: "The Rearm EP and debut album A Body and Birthmark appear on Dion Fortune Records, earning strong reviews and a reputation within the European underground.",
  },
  {
    year: "2001–2010",
    headline: "MK I catalogue grows",
    text: "Move to Berlin. Albums including Morphia, Of Whores and Culture and compilations extend the band's recorded legacy. Urban Gothic (2010) closes the first chapter as the final MK I line-up release.",
  },
  {
    year: "2021",
    headline: "Return with MK II",
    text: "Nearly three decades after formation, Götterdämmerung reconvenes with a new line-up and renewed purpose.",
  },
  {
    year: "2022",
    headline: "Intensity Zone",
    text: "A record deal with Alice In... / Dark Dimensions leads to Intensity Zone — the first MK II album, reconnecting with the band's roots while opening new territory.",
  },
  {
    year: "2023–2024",
    headline: "Singles and A Violent Sky",
    text: "Common Existence and Force Systems precede A Violent Sky (2024), the band's most expansive MK II album to date.",
  },
  {
    year: "2024",
    headline: "Final live appearance",
    text: "A performance alongside Then Comes Silence in Berlin marks the MK II era's last stage appearance.",
  },
  {
    year: "2025",
    headline: "Towards the Unknown",
    text: "The Towards the Unknown EP collects the final studio recordings from the MK II sessions — four tracks released as the band's last studio statement.",
  },
];

export const discographyOverviewSection = {
  title: "Discography Overview",
  paragraphs: [
    "Across twelve releases spanning 1994 to 2025, the Götterdämmerung catalogue divides into two eras. MK I (1994–2010) documents the original line-up through albums, compilations and the landmark Urban Gothic. MK II (2022–2025) covers the return — Intensity Zone, singles, A Violent Sky and the closing Towards the Unknown EP.",
    "Every release is available to explore on the discography page, with artwork, release details and Bandcamp players for each title.",
  ],
};

export const currentActivitySection = {
  title: "Current Activity",
  paragraphs: [
    "At the end of 2024, a major operation brought all band activity to a halt. Recovery occupied the whole of 2025 and remains ongoing.",
    "The Towards the Unknown EP stands as the final studio recordings from the MK II sessions. No further live dates or releases are scheduled at this time.",
    "One final echo from the edge.",
  ],
};

export const bandExploreLinks = [
  { href: "/discography", label: "Discography", description: "Twelve releases across MK I and MK II" },
  { href: "/video", label: "Videos", description: "Official music videos and live footage" },
  { href: "/streaming", label: "Streaming", description: "Listen on Bandcamp, Spotify and more" },
] as const;
