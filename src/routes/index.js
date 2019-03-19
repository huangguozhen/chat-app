import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import Login from './Login';
import ChatRoom from './ChatRoom';

export default (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' component={ChatRoom} />
    </Switch>
  </Router>
);
