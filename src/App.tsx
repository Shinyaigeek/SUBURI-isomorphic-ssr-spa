import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route, StaticRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <div className="app">
      <StaticRouter>
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </StaticRouter>

      {/* aaaa */}
    </div>
  );
}

// if(document !== undefined){
//     ReactDOM.hydrate(<App />, document.getElementById("aiueo"))
// }
