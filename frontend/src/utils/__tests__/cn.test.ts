import { describe, expect, it } from "vitest";
import { cn } from "../cn";

describe("cn", () => {
  it("should join class names and drop falsy values", () => {
    expect(cn("a", "b", undefined, null, false, 0, "")).toBe("a b");
  });

  it("should merge tailwind classes, keeping the last conflicting utility", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("should accept conditional class objects", () => {
    expect(cn({ "text-red-500": true, "text-blue-500": false })).toBe(
      "text-red-500",
    );
  });

  it("should return an empty string when no classes are provided", () => {
    expect(cn()).toBe("");
  });
});
