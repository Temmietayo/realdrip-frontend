import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/pages/Signin/Index";
import Dashboard from "./components/pages/Dashboard/Index";
import ActiveInfusion from "./components/pages/Active Infusion/Index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route
              exact
              path="/activeInfusion/:infusionId"
              component={ActiveInfusion}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
