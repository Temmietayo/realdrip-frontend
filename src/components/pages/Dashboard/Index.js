import React, { Component } from "react";
import View from "./View";
import axios from "axios";
import PropTypes from "prop-types";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textNotice: "Urgent",
      operationReading: "14",
      operationStatus: "almost complete",
      infusions: null,
      activeInfusion: null,
      activeDevice: null,
      activeNurses: null,
      patientName: null
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({ operationReading: event.target.value });
  };

  componentDidMount() {
    if (localStorage.getItem("rd-isLoggedIn")) {
      console.log("wow. this user is logged in");
    } else {
      alert("You need to signin to view this page");
    }
    console.log(
      "this token is conjured from the infusion dashboard",
      localStorage.getItem("rd-reg-token")
    );
    this.getInfusion();
  }

  getInfusion = async () => {
    const apiBaseUrl = "https://rd-backend-staging.herokuapp.com/api";

    axios.defaults.headers.common["req-token"] = localStorage.getItem(
      "rd-reg-token"
    );
    await axios
      .get(`${apiBaseUrl}/infusion`)
      .then(response => {
        if (response.status == 200) {
          var infusions = response.data.data;
          let ai = [];
          let an = [];
          let ap = [];
          infusions.forEach(infusion => {
            if (infusion.status === "active") {
              ai.push(infusion);
              ap.push(infusion.patientName);
              if (infusion.nurseId) {
                an.push(infusion.nurseId);
              }
            }
          });

          this.setState({
            infusions: infusions,
            activeInfusion: ai.length,
            activeDevice: ai.length,
            activeNurses: an.length
          });
          console.log(this.state.infusions);
        }
      })
      .catch(err => {
        console.log(err.response);
        if (err.response && err.response.status == 401) {
          alert("please login to view resource");
        }
        return null;
      });
  };

  render() {
    return (
      <View
        operationReading={this.state.operationReading}
        operationStatus={this.state.operationStatus}
        textNotice={this.state.textNotice}
        activeInfusion={this.state.activeInfusion}
        activeNurses={this.state.activeNurses}
        activeDevice={this.state.activeDevice}
        patientName={this.state.patientName}
        infusions={this.state.infusions}
      />
    );
  }
}

Dashboard.defaultProps = {
  dispatch: () => {}
};

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
};
export default Dashboard;
