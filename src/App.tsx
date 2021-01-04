import React from "react";
import { GlobalStyle } from "./components/global/globalStyles";
import Game from "./containers/Game";
import { StylesProvider } from "@material-ui/core/styles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <GlobalStyle />
      <StylesProvider injectFirst>
        <Game />
      </StylesProvider>
    </div>
  );
};

export default App;
