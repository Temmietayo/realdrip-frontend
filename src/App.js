import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/pages/Signin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
              <Route path="/" exact component={Signin} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
