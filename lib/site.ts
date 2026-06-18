export const siteConfig = {
  name: "Götterdämmerung",
  tagline: "Official Website",
  description: "Official website of Götterdämmerung.",
  url: "https://gotterdammerung.vercel.app",
  email: "info@gotterdammerung.band",
} as const;

export const logo = {
  white: "/logo/logo-white.svg",
  nav: "/logo/Gotterdammerung-logo-white.png",
  black: "/logo/Gotterdammerung logo black.png",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News", hidden: true },
  { href: "/discography", label: "Discography" },
  { href: "/streaming", label: "Streaming" },
  { href: "/video", label: "Video" },
  { href: "https://gotterdammerung.bandcamp.com/merch", label: "Merch", external: true },
  { href: "/band", label: "Band" },
  { href: "/contact", label: "Contact" },
] as const;

export const visibleNavLinks = navLinks.filter(
  (link) => !("hidden" in link && link.hidden),
);

export const socialLinks = [
  { href: "https://www.instagram.com/gotterdammerung_band/", label: "Instagram", platform: "instagram" },
  { href: "https://www.youtube.com/@gotterdammerung_band4064", label: "YouTube", platform: "youtube" },
  { href: "https://open.spotify.com/artist/3XjGq2r95rXxAxiP2D2zRl?si=ytxmYsdlREyUNmDbpTqssA", label: "Spotify", platform: "spotify" },
  { href: "https://gotterdammerung.bandcamp.com/", label: "Bandcamp", platform: "bandcamp" },
] as const;
