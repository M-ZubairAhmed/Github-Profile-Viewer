import React, { Component } from 'react';
import './spinner.css';

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
