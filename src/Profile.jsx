import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
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
      updated_at: "2017-05-20T05:27:56Z"
    };

    if (this.props.data !== null) {
      githubData = this.props.data;

      return (
        <div className="footSection">
          <img className="cover" src={githubData.avatar_url} />
          <img className="profile-pic" src={githubData.avatar_url} />
          <div className="name">
            {githubData.name}
          </div>
          <div className="location">
            {githubData.location}
          </div>
          <div className="bio">
            {githubData.bio}
          </div>
        </div>
      );
    }
  }
}

export default Profile;
