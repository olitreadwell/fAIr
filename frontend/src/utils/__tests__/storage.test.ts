import { afterEach, describe, expect, it, vi } from "vitest";
import { getLocalStorageValue, setLocalStorageValue } from "../storage";

describe("storage helpers", () => {
  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("should return the stored value for an existing key", () => {
    localStorage.setItem("key", "value");
    expect(getLocalStorageValue("key")).toBe("value");
  });

  it("should return undefined when the key is missing or empty", () => {
    expect(getLocalStorageValue("missing")).toBeUndefined();
    localStorage.setItem("key", "");
    expect(getLocalStorageValue("key")).toBeUndefined();
  });

  it("should store a value under the given key", () => {
    setLocalStorageValue("key", "value");
    expect(localStorage.getItem("key")).toBe("value");
  });

  it("should return undefined when localStorage access throws", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("denied");
    });
    expect(getLocalStorageValue("key")).toBeUndefined();
  });

  it("should not throw when localStorage writes fail", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("quota exceeded");
    });
    expect(() => setLocalStorageValue("key", "value")).not.toThrow();
  });
});
