import React, { Component } from "react";
import { getActiveInfusion, getActiveNurses, getActiveDevice} from '../../../actions/dashboardActions';
import { stopAsyncProcess } from '../../../actions/asyncProcess';
import * as asyncProcess from '../../../actions/asyncProcess';
import View from "./View";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      activeInfusion: 6,
      activeNurses: 4,
      textNotice: "Urgent",
      operationReading: "14",
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
        fetchingDeviceStarted={this.props.fetchingDeviceStarted}
        fetchingInfusionStarted={this.props.fetchingInfusionStarted}
        fetchingNursesStarted={this.props.fetchingNursesStarted}
        fetchingDeviceResolved={this.props.fetchingDeviceResolved}
        fetchingInfusionResolved={this.props.fetchingInfusionResolved}
        fetchingNursesResolved={this.props.fetchingNursesResolved}
        operationStatus={this.state.operationStatus}
        activeInfusion={this.state.activeInfusion}
        activeNurses={this.state.activeNurses}
        textNotice={this.state.textNotice}
      />
    );
  }
}

export default Dashboard;
