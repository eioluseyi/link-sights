import { describe, expect, test } from "@jest/globals";
import { findExistingLinkByIndex } from "@/helpers/helpers.server";
import { linkList } from "@/variables/variables.server.js";

// const { findExistingLinkByIndex } = require("@/helpers/helpers.server");
// const { linkList } = require("@/variables/variables.server");

const setupFunction = () => {
  linkList.length = 0;
};

test("adds 1 + 2 to equal 3", () => {
  expect(findExistingLinkByIndex("toll")).toBe(false);
});
