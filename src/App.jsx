import React, { Component } from "react";
import { FormGroup, FormControl, Glyphicon, InputGroup } from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearchQuiery: ""
    };
  }

  getInputValue(event) {
    this.setState({ userSearchQuiery: event.target.value });
  }

  assignInputValue() {
    const query = this.state.userSearchQuiery;
    console.log("query:", query);
  }

  render() {
    return (
      <div className="app">
        <div className="pageTitle">
          Github Profile Viewer
        </div>
        <FormGroup className="searchSection">
          <InputGroup>
            <FormControl
              className="inputField"
              placeholder="Enter User"
              onChange={event => this.getInputValue(event)}
            />
            <InputGroup.Addon>
              <Glyphicon
                glyph="search"
                onClick={() => this.assignInputValue()}
              />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="displayArea" />
      </div>
    );
  }
}

export default App;
