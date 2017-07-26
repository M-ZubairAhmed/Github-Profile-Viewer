import React, { Component } from 'react';
import './emptyPage.css';

class EmptyPage extends Component {
  render() {
    //Component to be displayed when search is starting
    if (this.props.pageType === 'StartingPage') {
      return (
        <div className="empty-div">
          <img
            className="empty-img"
            src="./binocular.png"
            alt="Start your search"
          />
          <p className="empty-text">Type in users name to start the search</p>
        </div>
      );
    } else if (this.props.pageType === 'NotFoundPage') {
      //Component to be displayed when no user is found
      return (
        <div className="empty-div">
          <img
            className="empty-img"
            src="./404.png"
            alt="404 error user not found"
          />
          <p className="empty-text">
            No user exist with <b>{this.props.query}</b>
          </p>
        </div>
      );
    }
  }
}

export default EmptyPage;
