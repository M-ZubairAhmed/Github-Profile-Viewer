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
    this.state = {
      query: ''
    };
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
    if (event.key === 'Enter') {
      console.log('enter pressed');
      this.sendQuery();
    }
  };

  sendQuery = () => {
    this.props.startSearch(this.state.query);
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
                  value={this.state.query}
                  onChange={this.handleChange}
                  onKeyPress={this.handleChange}
                />
                <InputGroup.Addon onClick={this.startSearch}>
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
