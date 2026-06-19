import { previewReleases, releases, type Release } from "@/lib/discography";

const ARTIST_NAME = "Götterdämmerung";
const BAND_URL = "https://gotterdammerung.band";

export function artistId(): string {
  return `${BAND_URL}/#musicgroup`;
}

function absoluteUrl(baseUrl: string, path: string): string {
  return new URL(path, baseUrl).toString();
}

function releaseId(baseUrl: string, release: Release): string {
  return `${baseUrl}/discography#${release.id}`;
}

function isMusicRecording(release: Release): boolean {
  return release.type === "Single";
}

function albumReleaseType(
  type: Release["type"],
): "AlbumRelease" | "EPRelease" {
  if (type === "EP") return "EPRelease";
  return "AlbumRelease";
}

function buildArtistReference() {
  return {
    "@type": "MusicGroup" as const,
    "@id": artistId(),
    name: ARTIST_NAME,
  };
}

export function buildMusicGroupSchema() {
  return {
    "@type": "MusicGroup",
    "@id": artistId(),
    name: ARTIST_NAME,
    url: BAND_URL,
    sameAs: [
      "https://gotterdammerung.band",
      "https://gotterdammerung.bandcamp.com",
      "https://www.youtube.com/@gotterdammerung_band4064",
      "https://www.facebook.com/gotterdammerung.band",
      "https://www.instagram.com/gotterdammerung_band/",
      "https://www.discogs.com/artist/99938-G%C3%B6tterd%C3%A4mmerung",
    ],
    genre: ["Gothic Rock", "Deathrock", "Post-Punk", "Dark Electronic"],
    foundingDate: "1991",
  };
}

export function buildGlobalMusicGroupSchema() {
  return {
    "@context": "https://schema.org",
    ...buildMusicGroupSchema(),
  };
}

export function buildReleaseSchema(baseUrl: string, release: Release) {
  const shared = {
    "@id": releaseId(baseUrl, release),
    name: release.title,
    datePublished: `${release.year}-01-01`,
    byArtist: buildArtistReference(),
    image: absoluteUrl(baseUrl, release.image),
    ...(release.bandcampLink ? { url: release.bandcampLink } : {}),
  };

  if (isMusicRecording(release)) {
    return {
      "@type": "MusicRecording",
      ...shared,
    };
  }

  return {
    "@type": "MusicAlbum",
    ...shared,
    albumReleaseType: albumReleaseType(release.type),
  };
}

function buildSchemaGraph(baseUrl: string, releaseList: Release[]) {
  return {
    "@context": "https://schema.org",
    "@graph": releaseList.map((release) => buildReleaseSchema(baseUrl, release)),
  };
}

export function buildHomepageSchema(baseUrl: string) {
  return buildSchemaGraph(baseUrl, previewReleases);
}

export function buildDiscographySchema(baseUrl: string) {
  return buildSchemaGraph(baseUrl, releases);
}
