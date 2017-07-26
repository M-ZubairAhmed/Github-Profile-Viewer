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

let query = '';

export default class Search extends Component {
  handleChange = event => {
    query = event.target.value;
    if (event.key === 'Enter') {
      this.sendQuery();
    }
  };

  sendQuery = () => {
    this.props.startSearch(query);
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={6} lgOffset={3} sm={12} md={9}>
            <FormGroup>
              <InputGroup>
                <FormControl
                  placeholder="Search users"
                  onChange={this.handleChange}
                  onKeyPress={this.handleChange}
                />
                <InputGroup.Addon onClick={this.sendQuery}>
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
