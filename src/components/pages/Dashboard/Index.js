import React, { Component } from "react";
import View from "./View";
import axios from 'axios';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      textNotice: "Urgent",
      operationReading: "14",
      operationStatus: "almost complete",
      activeInfusion: []
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({ operationReading: event.target.value });
  };

  componentWillMount = () => {
    const apiBaseUrl = "https://rd-backend=staging.herokuapp.com/api";

    const getInfusion = () => {
      axios
        .get(`${apiBaseUrl}/health`)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    };
  };

  render() {
    return <div>working</div>;
  }
}

export default Dashboard;
