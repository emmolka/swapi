import getRandomNumberInRange from "./getRandomNumberInRange";

const getStarshipId = (): number => {
  const presentStartshipsIds = [
    2,
    3,
    5,
    9,
    10,
    11,
    12,
    13,
    15,
    17,
    21,
    22,
    23,
    27,
    28,
    29,
    31,
    32
  ]; // some ids between 1-32 are missing in the api
  const randomNumber = getRandomNumberInRange(
    0,
    presentStartshipsIds.length - 1
  );

  return presentStartshipsIds[randomNumber];
};

export default getStarshipId;