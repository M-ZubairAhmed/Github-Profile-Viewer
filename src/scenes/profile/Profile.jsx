import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import { Card, Icon } from 'semantic-ui-react';
import Accordion from '../../components/accordion/Accordion';

import './profile.css';

class Profile extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col lg={10} lgOffset={1} sm={12} md={10} mdOffset={1}>
            <Image
              className="cover"
              alt="cover for users github"
              src={this.props.avatar_url}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              className="profile-pic"
              alt="users github avatar"
              src={this.props.avatar_url}
              circle
              responsive
            />
          </Col>
        </Row>
        <Row className="name">
          {this.props.name !== null ? this.props.name : this.props.login}
        </Row>
        <Row className="bio">
          {this.props.bio}
        </Row>
        <Row className="location">
          {this.props.location}
        </Row>
        <Row>
          <Col lg={4}>
            <div className="topInfo-sub">
              {this.props.followers}
            </div>
            <div className="topInfo-title">Followers</div>
          </Col>
          <Col lg={4}>
            <div className="topInfo-sub">
              {this.props.following}
            </div>
            <div className="topInfo-title">Following</div>
          </Col>
          <Col lg={4}>
            <div className="topInfo-sub">
              {this.props.hireable ? 'Available' : 'Occupied'}
            </div>
            <div className="topInfo-title">Hirable</div>
          </Col>
        </Row>
        <Card>
          <Image src="/assets/images/avatar/large/matthew.png" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
        <Accordion className="repositories" />
      </Grid>
    );
  }
}

export default Profile;
