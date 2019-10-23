import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/pages/Signin/Index";
import Dashboard from "./components/pages/Dashboard/Index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
