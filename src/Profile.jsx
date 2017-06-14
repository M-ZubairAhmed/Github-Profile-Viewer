import React, { Component } from "react";
import "./Profile.css";
import EmptyPage from "./EmptyPage.jsx";

class Profile extends Component {
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
      footer = <EmptyPage pageType="StartingPage" />;
    } else {
      githubData = this.props.data;
      if (githubData.message === "Not Found") {
        footer = <EmptyPage pageType="NotFoundPage" query={this.props.query} />;
      } else {
        footer = (
          <div className="footSection">
            <img
              className="cover"
              alt="cover for users github"
              src={githubData.avatar_url}
            />
            <img
              className="profile-pic"
              alt="users github avatar"
              src={githubData.avatar_url}
            />
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
