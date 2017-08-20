import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/App.jsx';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Accordion from './components/accordion/Accordion';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/a" component={Accordion} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
