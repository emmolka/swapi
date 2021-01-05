import parseIntRemoveComma from "./parseIntRemoveComma";
const getWinner = (value1: string, value2: string): string => {
  if (parseIntRemoveComma(value1) > parseIntRemoveComma(value2)) {
    return "Player one wins!";
  } else if (parseIntRemoveComma(value1) < parseIntRemoveComma(value2)) {
    return "Player two wins!";
  } else if (parseIntRemoveComma(value1) === parseIntRemoveComma(value2)) {
    return "Draw!";
  } else {
    return "One of values wasn't a number, please try again";
  }
};

export default getWinner;
