import React, { Component } from "react";
import View from "./View";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      activeInfusion: 6,
      activeNurses: 4,
      textNotice: "Urgent",
      operationReading: "19",
      operationStatus: "almost complete"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({ operationReading: event.target.value });
  };

  render() {
    return (
      <View
        handleChange={this.handleChange}
        operationReading={this.state.operationReading}
        operationStatus={this.state.operationStatus}
        activeInfusion={this.state.activeInfusion}
        activeNurses={this.state.activeNurses}
        textNotice={this.state.textNotice}
      />
    );
  }
}

export default Dashboard;
