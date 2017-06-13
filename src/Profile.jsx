import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    let footer = "";

    let githubData = {
      avatar_url: "",
      bio: "",
      blog: "",
      company: "",
      created_at: "",
      email: "",
      events_url: "",
      followers: "",
      followers_url: "",
      following: "",
      following_url: "",
      gists_url: "",
      gravatar_id: "",
      hireable: "",
      html_url: "",
      id: "",
      location: "",
      login: "",
      name: "",
      organizations_url: "",
      public_gists: "",
      public_repos: "",
      received_events_url: "",
      repos_url: "",
      starred_url: "",
      subscriptions_url: "",
      updated_at: "",
      //404 not found JSON below
      message: "",
      documentation_url: ""
    };

    let queryLenght = String.prototype.trim.call(this.props.query).length;

    if (this.props.data === null || queryLenght === 0) {
      footer = (
        <div className="search-start">
          <img className="search-img" src="./binocular.png" />
          <p>
            Type in user's name to start the search
          </p>
        </div>
      );
    } else {
      githubData = this.props.data;
      console.log("data", githubData.message);
      if (githubData.message === "Not Found") {
        footer = (
          <div className="notfound-main">
            <img className="notfound-img" src="./404.png" />
            <p>No user exist with {this.props.query}</p>
          </div>
        );
      } else {
        footer = (
          <div className="footSection">
            <img className="cover" src={githubData.avatar_url} />
            <img className="profile-pic" src={githubData.avatar_url} />
            <div className="name">
              {githubData.name !== null ? githubData.name : githubData.login}
            </div>
            <div className="bio">
              {githubData.bio}
            </div>
            <div className="location">
              {githubData.location}
            </div>
            <ul className="social-main">
              <li className="followers-main">
                <div className="followers">Followers</div>
                <div className="followers-count">{githubData.followers}</div>
              </li>
              <li className="following-main">
                <div className="following">Following</div>
                <div className="following-count">{githubData.following}</div>
              </li>
              <li className="hireable-main">
                <div className="hirable">Hirable</div>
                <div className="hirable-count">
                  {githubData.hireable ? "Available" : "Occupied"}
                </div>
              </li>
            </ul>
          </div>
        );
      }
    }

    return (
      <div>
        {footer}
      </div>
    );
  }
}

export default Profile;
