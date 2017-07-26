import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
// import Repos from "./Repos.jsx";

class Projects extends Component {
  bla(selectedKey) {
    console.log('entered', selectedKey);
  }
  render() {
    return (
      <div>
        <div>Projects</div>
        <Tabs defaultActiveKey={2} justified id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Repositories">
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title="Gists">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Starred">
            Tab 3 content
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Projects;
