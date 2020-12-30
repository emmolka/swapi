import React from "react";
import { GlobalStyle } from "./components/global/globalStyles";
import Game from "./containers/Game";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <GlobalStyle />
      <Game />
    </div>
  );
};

export default App;
