import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomePage, DetailPage } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/country/:name/:capital/" exact component={DetailPage} />
          <Route path="/country/:alphaCode" exact component={DetailPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
