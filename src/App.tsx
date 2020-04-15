import React from "react";
import "./App.scss";
import { HashRouter } from "react-router-dom";
import { Router } from "./Router";

const App: React.FC<{}> = () => (
  <HashRouter>
    <Router />
  </HashRouter>
);

export default App;
