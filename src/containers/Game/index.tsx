import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import MainMenu from "../../components/MainMenu";
import axios from "axios";
import getRandomNumber from "../../helpers/getRandomNumberInRange";

const Game = (): React.ReactElement => {
  const [objectName, setObjectName] = useState<string>("");
  const [attribute, setAttribute] = useState<string>("");

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
    setAttribute(newValue + "");
  };

  const startButtonClick = (event: React.ChangeEvent<{}>): void => {
    getObjectInfo();
  };

  const getObjectInfo = async ()  => {
    try{
      const info = await axios.get(
        `${apiLink}/${objectName}/${getRandomNumber(
          1,
          objectName === "people" ? 82 : 32
        )}/` // there are 82 available people in the api
      );
      console.log(info);
    }catch(e){
      console.log(e)
    }
  };

  return (
    <Wrapper>
      <MainMenu
        objectName={objectName}
        attribute={attribute}
        handleObjectNameChange={handleObjectNameChange}
        handleAttributeChange={handleAttributeChange}
        buttonClick={startButtonClick}
      />
    </Wrapper>
  );
};

export default Game;
