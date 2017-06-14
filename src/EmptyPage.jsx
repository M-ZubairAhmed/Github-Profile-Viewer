import React, { Component } from "react";
import "./EmptyPage.css";

class EmptyPage extends Component {
  render() {
    //Page to be displayed when search is starting
    if (this.props.pageType === "StartingPage") {
      return (
        <div className="search-start">
          <img className="search-img" src="./binocular.png" />
          <p>
            Type in user's name to start the search
          </p>
        </div>
      );
    } else if (this.props.pageType == "NotFoundPage") {
      //Page to be displayed when no user is found
      return (
        <div className="notfound-main">
          <img className="notfound-img" src="./404.png" />
          <p>No user exist with {this.props.query}</p>
        </div>
      );
    }
  }
}

export default EmptyPage;
