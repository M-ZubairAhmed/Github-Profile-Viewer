import React, { Component } from "react";
import { FormGroup, FormControl, Glyphicon, InputGroup } from "react-bootstrap";
import "./App.css";
import Pointer from "./Pointer.jsx";
import Spinner from "./Spinner.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: "",
      passedQuery: "",
      isLoaded: false
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
    this.setState({
      isLoaded: true
    });
    console.log("Searching for user =", query);
    const BASE_URL = "https://api.github.com/users/";
    const USER_ID = query;
    const FETCH_URL = BASE_URL + USER_ID;
    console.log("from URL : ", FETCH_URL);

    fetch(FETCH_URL, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
          isLoaded: false
        });
      });

    //clearing the search bar
    this.setState({
      passedQuery: query,
      query: ""
    });
  }

  render() {
    if (true) {
    }
    return (
      <div className="app">
        <div className="headSection">
          <div className="pageTitle">
            Github Profile Viewer
          </div>
          <FormGroup className="searchSection">
            <InputGroup>
              <FormControl
                className="inputField"
                placeholder="Search users"
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
        </div>
        <Spinner run={this.state.isLoaded} />
        <Pointer data={this.state.data} query={this.state.passedQuery} />
      </div>
    );
  }
}

export default App;
