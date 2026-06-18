export const youtubeChannelUrl =
  "https://www.youtube.com/@gotterdammerung_band4064" as const;

export type Video = {
  id: string;
  title: string;
  year?: number;
  releaseContext?: string;
  youtubeUrl: string;
  thumbnail?: string;
};

export const featuredVideo = {
  id: "shapes-of-insanity",
  title: "Shapes of Insanity",
  releaseContext: "From Towards the Unknown EP",
  youtubeUrl: "https://youtu.be/CWVvLzBmPNM",
} as const satisfies Video;

/** Add official videos here as URLs become available. */
export const videoArchive: Video[] = [];

export function getYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1).split("/")[0] || null;
    }

    if (parsed.pathname.startsWith("/embed/")) {
      return parsed.pathname.split("/")[2] || null;
    }

    if (parsed.pathname === "/watch") {
      return parsed.searchParams.get("v");
    }

    if (parsed.pathname.startsWith("/shorts/")) {
      return parsed.pathname.split("/")[2] || null;
    }
  } catch {
    return null;
  }

  return null;
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const id = getYouTubeVideoId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

export function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}
