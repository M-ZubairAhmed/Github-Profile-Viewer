import React, { Component } from 'react';
import EmptyPage from '../scenes/emptyPage/EmptyPage.jsx';
import Profile from '../scenes/profile/Profile.jsx';

class Pointer extends Component {
  render() {
    let footer = '';

    let githubData = {
      avatar_url: '',
      bio: '',
      blog: '',
      company: '',
      created_at: '',
      email: '',
      events_url: '',
      followers: '',
      followers_url: '',
      following: '',
      following_url: '',
      gists_url: '',
      gravatar_id: '',
      hireable: '',
      html_url: '',
      id: '',
      location: '',
      login: '',
      name: '',
      organizations_url: '',
      public_gists: '',
      public_repos: '',
      received_events_url: '',
      repos_url: '',
      starred_url: '',
      subscriptions_url: '',
      updated_at: '',
      //404 not found JSON below
      message: '',
      documentation_url: ''
    };

    let queryLenght = String.prototype.trim.call(this.props.query).length;

    if (this.props.data === null || queryLenght === 0) {
      footer = <EmptyPage pageType="StartingPage" />;
    } else {
      githubData = this.props.data;
      if (githubData.message === 'Not Found') {
        footer = <EmptyPage pageType="NotFoundPage" query={this.props.query} />;
      } else {
        footer = (
          <Profile
            avatar_url={githubData.avatar_url}
            name={githubData.name}
            login={githubData.login}
            bio={githubData.bio}
            following={githubData.following}
            followers={githubData.followers}
            hireable={githubData.hireable}
            repos_url={githubData.repos_url}
            public_repos={githubData.public_repos}
            gists_url={githubData.gists_url}
            public_gists={githubData.public_gists}
            starred_url={githubData.starred_url}
          />
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

export default Pointer;
