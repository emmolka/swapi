import React, { ReactElement } from "react";
import {
  Wrapper,
  StyledButton,
  StyledAutocomplete,
  StyledTextField
} from "./style";

interface MainMenuProps {
  objectName: string;
  attribute: string;
  handleObjectNameChange: (
    event: React.ChangeEvent<{}>,
    value: unknown
  ) => void;
  handleAttributeChange: (event: React.ChangeEvent<{}>, value: unknown) => void;
  buttonClick: (event: React.ChangeEvent<{}>) => void;
}

const MainMenu = ({
  objectName,
  attribute,
  handleObjectNameChange,
  handleAttributeChange,
  buttonClick
}: MainMenuProps): ReactElement => (
  <Wrapper>
    <StyledAutocomplete
      id="combo-box-demo"
      options={["starships", "people"]}
      getOptionLabel={(option: any) => option}
      value={objectName}
      onChange={handleObjectNameChange}
      renderInput={(params): React.ReactNode => (
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
      options={objectName === "starships" ? ["mas"] : ["crew"]}
      value={attribute}
      onChange={handleAttributeChange}
      getOptionLabel={(option: any) => option}
      renderInput={(params): React.ReactNode => (
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
      size="large"
      disabled={!objectName || !attribute}
      onClick={buttonClick}
    >
      Start
    </StyledButton>
  </Wrapper>
);

export default MainMenu;
