import React, { Component } from "react";
import View from "./View";
import axios from "axios";
import PropTypes from "prop-types";

class Infusion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infusion: null
    };
  }
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
    const {
      match: { params }
    } = this.props;
    axios.defaults.headers.common["req-token"] = localStorage.getItem(
      "rd-reg-token"
    );
    await axios
      .get(`${apiBaseUrl}/infusion/${params.infusionId}`)
      .then(response => {
        if (response.status == 200) {
          var infusion = response.data.data;
          console.log(infusion);

          this.setState({
            infusion: infusion
          });
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
    return <View infusion={this.state.infusion} />;
  }
}

Infusion.defaultProps = {
  dispatch: () => {}
};

Infusion.propTypes = {
  dispatch: PropTypes.func.isRequired
};
export default Infusion;
