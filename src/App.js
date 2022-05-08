import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home";
import Editor from "./Editor";
import Navbar from "./Navbar";
function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exct path="/editor" component={Editor} />
      </Switch>
    </Router>
  );
}

export default App;
