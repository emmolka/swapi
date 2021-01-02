import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  padding: 20px 0;
`;

export const StyledButton = styled(Button)`
  margin-top: 45px;
  background-color: #fff;
  color: #000 !important;
`;

export const StyledAutocomplete = styled(Autocomplete)`
  z-index: 1;
  margin-top: 20px;
  width: 300px;
  overflow: visible;

  && .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  && .MuiFormControl-root {
    overflow: visible;
  }
  && .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid white;
    border-radius: inherit;
  }
`;

export const StyledTextField = styled(TextField)`
  label {
    color: #fff !important;
  }
  && .MuiAutocomplete-input {
    color: #fff;
  }
`;
