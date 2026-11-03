import { describe, it, expect } from "vitest";
import { truncateString } from "../string-utils";

describe("truncateString", () => {
  it("should return undefined when no string is provided", () => {
    expect(truncateString()).toBeUndefined();
    expect(truncateString(undefined)).toBeUndefined();
  });

  it("should return an empty string unchanged", () => {
    expect(truncateString("")).toBe("");
  });

  it("should return the string unchanged when it is shorter than the default max length", () => {
    expect(truncateString("Short string")).toBe("Short string");
  });

  it("should return the string unchanged when it is exactly the default max length", () => {
    const exact = "A".repeat(30);
    expect(truncateString(exact)).toBe(exact);
  });

  it("should truncate and append an ellipsis when longer than the default max length", () => {
    const result = truncateString("A".repeat(31));
    expect(result).toBe(`${"A".repeat(27)}...`);
    expect(result).toHaveLength(30);
  });

  it("should return the string unchanged when it is exactly the custom max length", () => {
    expect(truncateString("Hello", 5)).toBe("Hello");
  });

  it("should truncate to the custom max length, keeping the total length within the limit", () => {
    const result = truncateString("Hello, World!", 10);
    expect(result).toBe("Hello, ...");
    expect(result).toHaveLength(10);
  });
});
