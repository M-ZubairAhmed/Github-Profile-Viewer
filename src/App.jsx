import React, { Component } from "react";
import { FormGroup, FormControl, Glyphicon, InputGroup } from "react-bootstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="pageTitle">
          Github Profile Viewer
        </div>
        <FormGroup className="searchSection">
          <InputGroup>
            <FormControl className="inputField" placeholder="Enter User" />
            <InputGroup.Addon>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="displayArea" />
      </div>
    );
  }
}

export default App;
