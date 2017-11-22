import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/App.jsx';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
