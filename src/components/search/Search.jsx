import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  InputGroup,
  FormControl,
  Glyphicon
} from 'react-bootstrap';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid fluid={false}>
        <Row>
          <Col lg={6} lgOffset={3} sm={12} md={9}>
            <FormGroup className="searchSection">
              <InputGroup>
                <FormControl
                  className="inputField"
                  placeholder="Search users"
                  // value={this.state.query}
                  // onChange={this.handleChange}
                  // onKeyPress={this.handleChange}
                />
                <InputGroup.Addon
                // onClick={() => this.startSearch(this.state.query)}
                >
                  <Glyphicon glyph="search" />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}
