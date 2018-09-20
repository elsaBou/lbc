import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Adlist from "./components/Adlist/Adlist";
import Adview from "./components/Adview/Adview";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Header />
          </div>
          <Switch>
            <Route exact path="/" component={Adlist} />
            <Route path="/adview" component={Adview} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
