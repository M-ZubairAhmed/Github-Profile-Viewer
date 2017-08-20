import React, { Component } from 'react';
import {} from 'react-bootstrap';
import './App.css';
import Pointer from '../route/Pointer.jsx';
import Spinner from '../components/spinner/Spinner.jsx';
import Search from '../components/search/Search.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      passedQuery: '',
      isLoaded: false
    };
  }

  startSearch = query => {
    this.setState({
      isLoaded: true,
      passedQuery: query
    });
    console.log('Searching for user =', query);
    const BASE_URL = 'https://api.github.com/users/';
    const USER_ID = query;
    const FETCH_URL = BASE_URL + USER_ID;
    console.log('from URL : ', FETCH_URL);

    fetch(FETCH_URL, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
          isLoaded: false
        });
      });
  };

  render() {
    return (
      <div className="app">
        <div className="headSection">
          <div className="pageTitle">Github Profile Viewer</div>
          <Search startSearch={this.startSearch} />
        </div>
        <Spinner run={this.state.isLoaded} />
        <Pointer data={this.state.data} query={this.state.passedQuery} />
      </div>
    );
  }
}

export default App;
