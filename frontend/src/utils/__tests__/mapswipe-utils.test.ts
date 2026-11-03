import { describe, expect, it } from "vitest";
import {
  formatMapSwipeProjectStatus,
  formatProjectTopic,
} from "../mapswipe-utils";

describe("formatProjectTopic", () => {
  it("should trim leading and trailing whitespace", () => {
    expect(formatProjectTopic("  Building Footprints  ")).toBe(
      "Building Footprints",
    );
  });

  it("should collapse multiple internal spaces into a single space", () => {
    expect(formatProjectTopic("Building   Footprints")).toBe(
      "Building Footprints",
    );
  });
});

describe("formatMapSwipeProjectStatus", () => {
  it("should convert a snake_case status into a title-cased label", () => {
    expect(formatMapSwipeProjectStatus("READY_TO_PUBLISH")).toBe(
      "Ready To Publish",
    );
  });

  it("should handle a single-word status", () => {
    expect(formatMapSwipeProjectStatus("DRAFT")).toBe("Draft");
  });
});
