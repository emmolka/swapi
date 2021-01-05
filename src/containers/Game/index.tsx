import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import MainMenu from "../../components/MainMenu";
import axios from "axios";
import getRandomNumber from "../../helpers/getRandomNumberInRange";
import getWinner from "../../helpers/getWinner";
import getStarshipId from "../../helpers/getStarshipId";
import Loader from "react-loader-spinner";
import Card from "../../components/Card";
import { StyledButton } from "../../components/MainMenu/style";
import Score from "../../components/Score";
import { CardsWrapper } from "./style";
import {
  AttributesTypes,
  ObjectNameTypes,
  PlayerObject,
  AttributesObject
} from "../../types/types";

const Game = (): React.ReactElement => {
  const [objectName, setObjectName] = useState<ObjectNameTypes>("");
  const [attribute, setAttribute] = useState<AttributesTypes>("");
  const [isLoading, setIsLoading] = useState(false);
  const [winnerInfo, setWinnerInfo] = useState("");

  const [playerOne, setPlayerOne] = useState<PlayerObject>({
    name: "",
    value: "",
    score: 0
  });

  const [playerTwo, setPlayerTwo] = useState<PlayerObject>({
    name: "",
    value: "",
    score: 0
  });

  const apiLink = "https://swapi.dev/api";

  // Main menu handlers
  const handleObjectNameChange = (
    event: React.ChangeEvent<{}>,
    value: unknown
  ): void => {
    if (value === null) {
      setAttribute("");
      return setObjectName("");
    }
    setAttribute("");
    setObjectName(value as ObjectNameTypes);
  };

  const handleAttributeChange = (
    event: React.ChangeEvent<{}>,
    newValue: unknown
  ): void => {
    if (newValue === null) {
      return setAttribute("");
    }
    setAttribute(newValue as AttributesTypes);
  };

  const getObjectData = async (): Promise<AttributesObject> => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${apiLink}/${objectName}/${
          objectName === "people" ? getRandomNumber(1, 83) : getStarshipId()
        }/` // there are 83 available people in the api
      );
      setIsLoading(false);
      return response.data;
    } catch (e) {
      alert("Error appeared, please refresh page and check connection");
      return {
        name: "",
        crew: "",
        passengers: "",
        cargo_capacity: "",
        cost_in_credits: "",
        mass: "",
        height: ""
      };
    }
  };

  const startButtonClick = async (): Promise<void> => {
    const playerOneData = await getObjectData();
    const playerTwoData = await getObjectData();
    const winnerCopy = getWinner(
      attribute !== "" ? playerOneData[attribute] : "",
      attribute !== "" ? playerTwoData[attribute] : ""
    );
    // displays the information about who won
    setWinnerInfo(winnerCopy);
    setPlayerOne({
      name: playerOneData.name,
      value: attribute !== "" ? playerOneData[attribute] : "",
      score:
        winnerCopy === "Player one wins!"
          ? playerOne.score + 1
          : playerOne.score
    });
    setPlayerTwo({
      name: playerTwoData.name,
      value: attribute !== "" ? playerTwoData[attribute] : "",
      score:
        winnerCopy === "Player two wins!"
          ? playerTwo.score + 1
          : playerTwo.score
    });
  };

  return (
    <Wrapper>
      {isLoading && (
        <Loader type="Puff" color="#fff" height={100} width={100} />
      )}
      {!isLoading && !playerOne.value && !playerTwo.value && (
        <MainMenu
          objectName={objectName}
          attribute={attribute}
          handleObjectNameChange={handleObjectNameChange}
          handleAttributeChange={handleAttributeChange}
          buttonClick={startButtonClick}
        />
      )}
      {!isLoading && playerOne.value && playerTwo.value && (
        <>
          <CardsWrapper>
            <Card
              image="red.png"
              playerTitle="Player 1"
              name={playerOne.name}
              value={playerOne.value}
              attribute={attribute}
            />
            <Card
              image="blue.png"
              playerTitle="Player 2"
              name={playerTwo.name}
              value={playerTwo.value}
              attribute={attribute}
            />
          </CardsWrapper>
          <Score
            winnerInfo={winnerInfo}
            score1={playerOne.score}
            score2={playerTwo.score}
          />
          <StyledButton
            variant="contained"
            size="large"
            disabled={!objectName || !attribute}
            onClick={startButtonClick}
          >
            Try again
          </StyledButton>
        </>
      )}
    </Wrapper>
  );
};

export default Game;
