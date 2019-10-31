import React, { Component } from "react";
import View from "./View";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInfusion } from "../../../actions/infusionActions";
import { withRouter } from "react-router-dom";
import { stopAsyncProcess } from "../../../actions/commonActions";
import * as asyncProcess from "../../../actions/asyncProcess";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      textNotice: "Urgent",
      operationReading: "14",
      operationStatus: "almost complete",
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({ operationReading: event.target.value });
  };

  componentWillMount = () => {
    this.props.dispatch(getInfusion);
  };

  render() {
    return (
      <View
        dispatch={this.props.dispatch}
        fetchingInfusionStarted={this.props.fetchingInfusionStarted}
        handleChange={this.handleChange}
        operationReading={this.state.operationReading}
        operationStatus={this.state.operationStatus}
        activeInfusion={this.props.activeInfusion}
        activeDevice={this.props.activeDevice}
        textNotice={this.state.textNotice}
      />
    );
  }
}

Dashboard.defaultProps = {
  activeDevice: [],
  activeInfusion: [],
  fetchingInfusionStarted: false,
  fetchingInfusionResolved: false,
  dispatch: () => {}
};

Dashboard.propTypes = {
  activeInfusion: PropTypes.array,
  activeDevice: PropTypes.array,
  fetchingInfusionStarted: PropTypes.bool,
  fetchingInfusionResolved: PropTypes.bool,
  dispatch: PropTypes.func
};

export default withRouter(
  connect(state => ({
    activeInfusion: state.activeInfusion,
    activeDevice: state.activeDevice,
    fetchingInfusionStarted: state.fetchingInfusionStarted,
    fetchingInfusionResolved: state.fetchingInfusionStarted
  }))(Dashboard)
);
