import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// Components
import Home from './scenes/Home';

export const history = require('history').createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  </Router>
);

export default Routes;
