import {
  isUrlEqual,
  removeLeadingHash,
  removeLeadingQuestionMark,
  removeTrailingSlash,
} from "../utils";

describe("Test `isUrlEqual()`", () => {
  const url = "https://google.com";

  describe("Test same link", () => {
    it(`Checks if "${url}" and "https://google.com" are the same`, () => {
      expect(isUrlEqual(url, "https://google.com")).toBe(true);
    });
  });

  describe("Test different links", () => {
    it(`Checks if "${url}" and "https://google.co" are the same`, () => {
      expect(isUrlEqual(url, "https://google.co")).toBe(false);
    });
  });

  describe("Test same link with trailing slash", () => {
    it(`Checks if "${url}" and "${url}/" are the same`, () => {
      expect(isUrlEqual(url, url + "/")).toBe(true);
    });
  });

  describe("Test same link with trailing question mark (query)", () => {
    it(`Checks if "${url}" and "${url}?" are the same`, () => {
      expect(isUrlEqual(url, url + "?")).toBe(true);
    });
  });

  describe("Test same link with trailing slash and question mark", () => {
    it(`Checks if "${url}" and "${url}/?" are the same`, () => {
      expect(isUrlEqual(url, url + "/?")).toBe(true);
    });
  });

  describe("Test same link, one with trailing slash, one with trailing slash and question mark", () => {
    it(`Checks if "${url}/" and "${url}/?" are the same`, () => {
      expect(isUrlEqual(url + "/", url + "/?")).toBe(true);
    });
  });
});

describe("Test `removeTrailingSlash()`", () => {
  it(`Checks if removeTrailingSlash("please/") returns "please"`, () => {
    expect(removeTrailingSlash("please/")).toBe("please");
  });
});

describe("Test `removeLeadingQuestionMark()`", () => {
  it(`Checks if removeLeadingQuestionMark("?please/") returns "please/"`, () => {
    expect(removeLeadingQuestionMark("?please/")).toBe("please/");
  });
});

describe("Test `removeLeadingHash()`", () => {
  it(`Checks if removeLeadingHash("#please/") returns "please/"`, () => {
    expect(removeLeadingHash("#please/")).toBe("please/");
  });
});
