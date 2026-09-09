import { describe, expect, it, vi } from "vitest";
import { BACKUP_VIDEO_URL } from "@/config";
import {
  downloadFile,
  getValidVideoUrl,
  getYouTubeEmbedUrl,
  getYouTubeThumbnail,
  uuid4,
} from "../general-utils";

describe("uuid4", () => {
  it("should generate a UUID v4 shaped string", () => {
    const id = uuid4();
    expect(id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    );
  });

  it("should generate unique values across calls", () => {
    expect(uuid4()).not.toBe(uuid4());
  });
});

describe("getValidVideoUrl", () => {
  it("should return the URL unchanged when it contains a YouTube video id", () => {
    const url = "https://www.youtube.com/watch?v=N2_9Bvm05_0";
    expect(getValidVideoUrl(url)).toBe(url);
  });

  it("should return the backup video URL for invalid input", () => {
    expect(getValidVideoUrl("not-a-video")).toBe(BACKUP_VIDEO_URL);
  });
});

describe("getYouTubeEmbedUrl", () => {
  it("should build an embed URL from a watch URL", () => {
    expect(
      getYouTubeEmbedUrl("https://www.youtube.com/watch?v=N2_9Bvm05_0"),
    ).toBe("https://www.youtube.com/embed/N2_9Bvm05_0?rel=0&modestbranding=1");
  });

  it("should build an embed URL from a short youtu.be URL", () => {
    expect(getYouTubeEmbedUrl("https://youtu.be/N2_9Bvm05_0")).toBe(
      "https://www.youtube.com/embed/N2_9Bvm05_0?rel=0&modestbranding=1",
    );
  });

  it("should return the backup video URL for invalid input", () => {
    expect(getYouTubeEmbedUrl("not-a-video")).toBe(BACKUP_VIDEO_URL);
  });
});

describe("getYouTubeThumbnail", () => {
  it("should return the maxresdefault thumbnail for a valid video URL", () => {
    expect(
      getYouTubeThumbnail("https://www.youtube.com/watch?v=N2_9Bvm05_0"),
    ).toBe("https://img.youtube.com/vi/N2_9Bvm05_0/maxresdefault.jpg");
  });

  it("should return the fallback cover image for invalid input", () => {
    expect(getYouTubeThumbnail("not-a-video")).toBeDefined();
  });
});

describe("downloadFile", () => {
  it("should open the URL in a new browser tab", () => {
    const open = vi.fn();
    vi.stubGlobal("open", open);
    downloadFile("https://example.com/file.pdf");
    expect(open).toHaveBeenCalledWith("https://example.com/file.pdf", "_blank");
    vi.unstubAllGlobals();
  });
});
