const parseIntRemoveComma = (word: string): number => {
  return parseInt(word.replace(/,|-/g, ""));
};

export default parseIntRemoveComma;
