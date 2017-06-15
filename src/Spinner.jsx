import React, { Component } from "react";
import "./Spinner.css";

class Spinner extends Component {
  render() {
    if (this.props.run) {
      return <div className="loader" />;
    } else {
      return <div />;
    }
  }
}

export default Spinner;
