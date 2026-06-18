import { previewReleases, releases, type Release } from "@/lib/discography";
import { streamingPlatforms } from "@/lib/streaming";
import { siteConfig, socialLinks } from "@/lib/site";

const ARTIST_NAME = "Götterdämmerung";

export function artistId(baseUrl: string): string {
  return `${baseUrl}/#musicgroup`;
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

function buildArtistReference(baseUrl: string) {
  return {
    "@type": "MusicGroup" as const,
    "@id": artistId(baseUrl),
    name: ARTIST_NAME,
  };
}

export function buildMusicGroupSchema(baseUrl: string) {
  const sameAs = [
    ...socialLinks.map((link) => link.href),
    ...streamingPlatforms.map((platform) => platform.href),
  ];

  return {
    "@type": "MusicGroup",
    "@id": artistId(baseUrl),
    name: ARTIST_NAME,
    url: baseUrl,
    email: siteConfig.email,
    foundingDate: "1991",
    foundingLocation: {
      "@type": "Place",
      name: "Berlin, Germany",
    },
    sameAs: [...new Set(sameAs)],
    image: absoluteUrl(baseUrl, "/images/652A9305.jpg"),
  };
}

export function buildReleaseSchema(baseUrl: string, release: Release) {
  const shared = {
    "@id": releaseId(baseUrl, release),
    name: release.title,
    datePublished: `${release.year}-01-01`,
    byArtist: buildArtistReference(baseUrl),
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
    "@graph": [
      buildMusicGroupSchema(baseUrl),
      ...releaseList.map((release) => buildReleaseSchema(baseUrl, release)),
    ],
  };
}

export function buildHomepageSchema(baseUrl: string) {
  return buildSchemaGraph(baseUrl, previewReleases);
}

export function buildDiscographySchema(baseUrl: string) {
  return buildSchemaGraph(baseUrl, releases);
}
