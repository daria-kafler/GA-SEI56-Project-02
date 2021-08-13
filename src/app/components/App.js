import "bulma";
import "../../shared/styles/main.scss";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../../home";
import Navbar from "./Navbar";
import { Forecast } from "../../forecast";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/warm">
          <Forecast />
        </Route>
        <Route path="/cool">
          <Forecast />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
