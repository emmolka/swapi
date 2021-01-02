import React, { ReactElement, useState } from "react";
import {
  Wrapper,
  StyledButton,
  StyledAutocomplete,
  StyledTextField
} from "./style";

const MainMenu = (): ReactElement => {
  const [objectName, setObjectName] = useState("");
  const [attribute, setAttribute] = useState("");

  console.log(objectName, attribute)
  return (
    <Wrapper>
      <StyledAutocomplete
        id="combo-box-demo"
        options={["starship", "person"]}
        getOptionLabel={(option: any) => option}
        value={objectName}
        onChange={(event: any , newValue: any): any => setObjectName(newValue)}
        renderInput={params => (
          <StyledTextField
            {...params}
            label="Object"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <StyledAutocomplete
        id="combo-box-demo"
        options={["mas", "crew"]}
        value={attribute}
        onChange={(event: any, newValue: any): any =>{
          setAttribute(newValue);
        }}
        getOptionLabel={(option: any) => option}
        renderInput={params => (
          <StyledTextField
            {...params}
            label="Attribute"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <StyledButton
        variant="contained"
        // className="button"
        size="large"
        onClick={(e) => {
          console.log(e);
        }}
      >
        Start
      </StyledButton>
    </Wrapper>
  );
}

export default MainMenu;
