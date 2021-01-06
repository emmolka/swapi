import getStarshipId from "../src/helpers/getStarshipId";
const missingStarshipsIds = [
  1,
  4,
  6,
  7,
  8,
  14,
  16,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  30
];

test("parseIntRemoveComma testing #1", () => {
  missingStarshipsIds.map(number => expect(getStarshipId()).not.toBe(number));
});
