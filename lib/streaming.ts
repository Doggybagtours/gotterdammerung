export type StreamingPlatform = {
  name: string;
  href: string;
  primary?: boolean;
};

export const streamingPlatforms: StreamingPlatform[] = [
  {
    name: "Bandcamp",
    href: "https://gotterdammerung.bandcamp.com/",
    primary: true,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/3XjGq2r95rXxAxiP2D2zRl?si=ytxmYsdlREyUNmDbpTqssA",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/us/artist/g%C3%B6tterd%C3%A4mmerung/1601109850",
  },
  {
    name: "YouTube Music",
    href: "https://www.youtube.com/channel/UC9MRfUH_hpcTN4qGbxPzPtw",
  },
  {
    name: "Deezer",
    href: "https://www.deezer.com/en/artist/150621",
  },
];

export const primaryStreamingPlatform = streamingPlatforms.find(
  (platform) => platform.primary,
)!;

export const secondaryStreamingPlatforms = streamingPlatforms.filter(
  (platform) => !platform.primary,
);
