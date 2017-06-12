import React, { Component } from "react";
import { FormGroup, FormControl, Glyphicon, InputGroup } from "react-bootstrap";
import "./App.css";
import Profile from "./Profile.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: ""
    };
  }

  getInputValue(event) {
    this.setState({ query: event.target.value });
  }

  enterPressed(event) {
    if (event.key === "Enter") {
      console.log("Search by pressing Enter");
      this.getInputValue(event);
      this.startSearch(this.state.query);
    }
  }

  startSearch(query) {
    console.log("Searching for user =", query);
    const BASE_URL = "https://api.github.com/users/";
    const USER_ID = query;
    const FETCH_URL = BASE_URL + USER_ID;
    console.log("URL : ", FETCH_URL);

    fetch(FETCH_URL, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json
        });
      });
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
              value={this.state.query}
              onChange={event => this.getInputValue(event)}
              onKeyPress={event => this.enterPressed(event)}
            />
            <InputGroup.Addon
              onClick={() => this.startSearch(this.state.query)}
            >
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Profile data={this.state.data} />
      </div>
    );
  }
}

export default App;
