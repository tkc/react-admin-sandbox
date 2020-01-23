import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import { Routes } from "../routes";
import { history } from "../store";

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }
`;

export function App() {
  return (
    <ConnectedRouter history={history}>
      {Routes}
      <GlobalStyle />
    </ConnectedRouter>
  );
}
