import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import MainMenu from "../../components/MainMenu";
import axios from "axios";
import getRandomNumber from "../../helpers/getRandomNumberInRange";
import getStarshipId from "../../helpers/getStarshipId";
import Loader from "react-loader-spinner";
import Card from "../../components/Card";
import { CardsWrapper } from "./style";

const Game = (): React.ReactElement => {
  const [objectName, setObjectName] = useState("");
  const [attribute, setAttribute] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [playerOne, setPlayerOne] = useState({
    name: "",
    value: ""
  });

  const [playerTwo, setPlayerTwo] = useState({
    name: "",
    value: ""
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
    setObjectName(value + ""); // adding empty string to be sure value is string
  };

  const handleAttributeChange = (
    event: React.ChangeEvent<{}>,
    newValue: unknown
  ): void => {
    if (newValue === null) {
      return setAttribute("");
    }
    setAttribute(newValue + ""); // adding empty string to be sure value is string
  };

  const getObjectData = async (): Promise<any> => {
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
      alert(e);
      return undefined;
    }
  };

  const startButtonClick = async (): Promise<void> => {
    const playerOneData = await getObjectData();
    const playerTwoData = await getObjectData();
    setPlayerOne({
      name: playerOneData.name,
      value: playerOneData[attribute]
    });
    setPlayerTwo({
      name: playerTwoData.name,
      value: playerTwoData[attribute]
    });
  };

  return (
    <Wrapper>
      {isLoading && (
        <Loader type="Puff" color="#fff" height={100} width={100} />
      )}
      {!isLoading && !playerOne.value && (
        <MainMenu
          objectName={objectName}
          attribute={attribute}
          handleObjectNameChange={handleObjectNameChange}
          handleAttributeChange={handleAttributeChange}
          buttonClick={startButtonClick}
        />
      )}
      {!isLoading && playerOne.value && (
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
      )}
    </Wrapper>
  );
};

export default Game;
