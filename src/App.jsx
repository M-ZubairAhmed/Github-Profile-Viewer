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

  enterPressed(event) {
    if (event.key === "Enter") {
      this.searchUser();
    }
  }

  searchUser() {
    const BASE_URL = "https://api.github.com/users/";
    const USER_ID = this.state.userSearchQuiery;
    const FETCH_URL = BASE_URL + USER_ID;
    console.log(FETCH_URL);
    fetch(FETCH_URL, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => this.getDetailsFromJSON(json));
  }

  getDetailsFromJSON(json) {
    console.log(json);
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
              onKeyPress={event => this.enterPressed(event)}
            />
            <InputGroup.Addon onClick={() => this.searchUser()}>
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
