import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overflow-x:hidden;
    box-sizing: border-box;
  }
  .MuiButtonBase-root{
    color:white;
  }
  .MuiCardMedia-img {
    object-fit: contain;
}
`;
