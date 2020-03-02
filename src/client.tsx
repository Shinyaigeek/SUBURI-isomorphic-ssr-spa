import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, StaticRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </BrowserRouter>

      {/* aaaa */}
    </div>
  );
}

ReactDOM.hydrate(<App />, document.getElementById("aiueo"));
