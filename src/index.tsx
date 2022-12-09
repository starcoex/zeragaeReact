import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const darkTheme = {
  textColor: "whitesmoke",
  bgColor: "#111",
};
const lightTheme = {
  textColor: "#111",
  bgColor: "whitesomke",
};
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
