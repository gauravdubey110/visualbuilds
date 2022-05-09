import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home";
import Editor from "./Editor";
import Navbar from "./Navbar";
function App() {

  return (
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exct path="/editor" component={Editor} />
    </>
  );
}

export default App;
