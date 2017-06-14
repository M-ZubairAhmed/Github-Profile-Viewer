import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Projects from "./Projects.jsx";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="footSection">
        <img
          className="cover"
          alt="cover for users github"
          src={this.props.avatar_url}
        />
        <Image
          className="profile-pic"
          alt="users github avatar"
          src={this.props.avatar_url}
          circle
          responsive
        />
        <div className="name">
          {this.props.name !== null ? this.props.name : this.props.login}
        </div>
        <div className="bio">
          {this.props.bio}
        </div>
        <div className="location">
          {this.props.location}
        </div>
        <ul className="social-main">
          <li className="followers-main">
            <div className="followers">Followers</div>
            <div className="followers-count">{this.props.followers}</div>
          </li>
          <li className="following-main">
            <div className="following">Following</div>
            <div className="following-count">{this.props.following}</div>
          </li>
          <li className="hireable-main">
            <div className="hirable">Hirable</div>
            <div className="hirable-count">
              {this.props.hireable ? "Available" : "Occupied"}
            </div>
          </li>
        </ul>
        <Projects
          repos_url={this.props.repos_url}
          public_repos={this.props.public_repos}
          gists_url={this.props.gists_url}
          public_gists={this.props.public_gists}
          starred_url={this.props.starred_url}
        />
      </div>
    );
  }
}

export default Profile;
