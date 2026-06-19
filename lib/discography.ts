export type Release = {
  id: string;
  title: string;
  year: number;
  type: string;
  formats: string;
  image: string;
  era: "mk-ii" | "mk-i";
  note?: string;
  /** Paste the Bandcamp EmbeddedPlayer iframe src URL. */
  bandcampEmbedUrl?: string;
  /** Optional iframe height in pixels (default 120; use ~470 for large players). */
  bandcampEmbedHeight?: number;
  /** Direct link to the release or store on Bandcamp. */
  bandcampLink?: string;
  /** Optional external link shown below the Bandcamp player. */
  orderLink?: { href: string; label: string };
};

function discographyImage(filename: string): string {
  return `/discography/${encodeURIComponent(filename)}`;
}

export const mkII: Release[] = [
  {
    id: "towards-the-unknown",
    title: "Towards the Unknown",
    year: 2025,
    type: "EP",
    formats: "Digital, LP",
    image: discographyImage("towards-the-unknown.jpg"),
    era: "mk-ii",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=382557534/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink: "https://gotterdammerung.bandcamp.com/album/towards-the-unknown-ep",
    bandcampEmbedHeight: 470,
    orderLink: {
      href: "https://elasticstage.com/gotterdammerung/releases/towards-the-unknown-singleep",
      label: "Order the Vinyl",
    },
  },
  {
    id: "a-violent-sky",
    title: "A Violent Sky",
    year: 2024,
    type: "Album",
    formats: "CD, LP, Digital",
    image: discographyImage("GD-a-violent-sky.jpg"),
    era: "mk-ii",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=1497711101/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink: "https://gotterdammerung.bandcamp.com/album/a-violent-sky",
    bandcampEmbedHeight: 470,
  },
  {
    id: "force-systems",
    title: "Force Systems",
    year: 2024,
    type: "Single",
    formats: "Digital",
    image: discographyImage("force-systems-single.jpg"),
    era: "mk-ii",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=1135189383/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink: "https://gotterdammerung.bandcamp.com/album/force-systems",
    bandcampEmbedHeight: 470,
  },
  {
    id: "common-existence",
    title: "Common Existence",
    year: 2023,
    type: "Single",
    formats: "Digital",
    image: discographyImage("common existence.jpg"),
    era: "mk-ii",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=869499164/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink: "https://gotterdammerung.bandcamp.com/album/common-existence",
    bandcampEmbedHeight: 470,
  },
  {
    id: "intensity-zone",
    title: "Intensity Zone",
    year: 2022,
    type: "Album",
    formats: "CD, LP, Digital",
    image: discographyImage("intensity-zone.jpg"),
    era: "mk-ii",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=4199874635/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink: "https://gotterdammerung.bandcamp.com/album/intensity-zone",
    bandcampEmbedHeight: 470,
    note: "First release of the MK II era.",
  },
];

export const mkI: Release[] = [
  {
    id: "urban-gothic",
    title: "Urban Gothic",
    year: 2010,
    type: "Album",
    formats: "CD + DVD",
    image: discographyImage("urban-gothic.jpg"),
    era: "mk-i",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=3254198148/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink: "https://gotterdammerung.bandcamp.com/album/urban-gothic",
    bandcampEmbedHeight: 470,
    note: "Final release of the MK I era.",
  },
  {
    id: "of-whores-and-culture",
    title: "Of Whores and Culture",
    year: 2007,
    type: "Album",
    formats: "CD",
    image: discographyImage("of-whores-and-culture.jpg"),
    era: "mk-i",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=309245147/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink: "https://gotterdammerung.bandcamp.com/album/of-whores-and-culture",
    bandcampEmbedHeight: 470,
  },
  {
    id: "kinburst-9104",
    title: "Kinburst 9104",
    year: 2004,
    type: "Compilation",
    formats: "CD",
    image: discographyImage("kinburst-9104.jpg"),
    era: "mk-i",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=3470057783/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink:
      "https://gotterdammerung.bandcamp.com/album/kin-burst-9104-compilation",
    bandcampEmbedHeight: 470,
  },
  {
    id: "the-nation",
    title: "The Nation Had Been Flirting With",
    year: 2003,
    type: "LP Picture Disc",
    formats: "LP",
    image: discographyImage("the-nation.jpg"),
    era: "mk-i",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=48129470/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink:
      "https://gotterdammerung.bandcamp.com/album/the-nation-had-been-flirting-with-forms-of-g-tterd-mmerung-with-extremes-of-vocabulary-and-behaviour-and-an-appetite-for-violent-resolutions",
    bandcampEmbedHeight: 470,
  },
  {
    id: "morphia",
    title: "Morphia",
    year: 2001,
    type: "Album",
    formats: "CD",
    image: discographyImage("morphia.jpg"),
    era: "mk-i",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=3032170112/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink: "https://gotterdammerung.bandcamp.com/album/morphia",
    bandcampEmbedHeight: 470,
  },
  {
    id: "a-body-and-birthmark",
    title: "A Body and Birthmark",
    year: 1994,
    type: "Album",
    formats: "CD",
    image: discographyImage("a-body-and-birthmark.jpg"),
    era: "mk-i",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=3596620748/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink: "https://gotterdammerung.bandcamp.com/album/a-body-and-birthmark",
    bandcampEmbedHeight: 470,
  },
  {
    id: "rearm",
    title: "Rearm",
    year: 1994,
    type: "EP",
    formats: "CD Single",
    image: discographyImage("rearm-single.jpg"),
    era: "mk-i",
    bandcampEmbedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=479707205/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
    bandcampLink: "https://gotterdammerung.bandcamp.com/album/rearm-ep",
    bandcampEmbedHeight: 470,
  },
];

export const releases: Release[] = [...mkII, ...mkI];

export const featuredRelease = mkII[0];
export const previewReleases = mkII.slice(0, 4);
