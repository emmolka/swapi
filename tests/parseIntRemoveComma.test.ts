import parseIntRemoveComma from "../src/helpers/parseIntRemoveComma";

test("parseIntRemoveComma testing #1", () => {
  expect(parseIntRemoveComma("139,333")).toBe(139333);
});

test("getWinner testing #2", () => {
  expect(parseIntRemoveComma("139-333")).toBe(139333);
});
