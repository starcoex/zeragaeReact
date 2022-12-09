import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./routes/Router";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router></Router>
    </React.Fragment>
  );
}

export default App;
