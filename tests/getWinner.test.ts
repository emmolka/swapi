import getWinner from "../src/helpers/getWinner";

test("getWinner testing #1", () => {
  expect(getWinner("1", "2")).toBe("Player two wins!");
});

test("getWinner testing #2", () => {
  expect(getWinner("32", "2")).toBe("Player one wins!");
});

test("getWinner testing #3", () => {
  expect(getWinner("1", "1")).toBe("Draw!");
});

test("getWinner testing #4", () => {
  expect(getWinner("unknown", "1")).toBe(
    "One of values wasn't a number, please try again"
  );
});
