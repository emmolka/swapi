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
      value={objectName}
      getOptionLabel={(option: unknown): string =>
        typeof option === "string" ? option : ""
      }
      onChange={handleObjectNameChange}
      getOptionSelected={(option: unknown, value: unknown): boolean => {
        if (value === "") {
          return true;
        } else if (value === option) {
          return true;
        }
        return false;
      }}
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
      options={
        objectName === "starships"
          ? ["crew", "passengers", "cargo_capacity", "cost_in_credits"]
          : ["mass", "height"]
      }
      value={attribute}
      getOptionLabel={(option: unknown): string =>
        typeof option === "string" ? option : ""
      }
      getOptionSelected={(option: unknown, value: unknown): boolean => {
        if (value === "") {
          return true;
        } else if (value === option) {
          return true;
        }
        return false;
      }}
      disabled={objectName === ""}
      onChange={handleAttributeChange}
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
