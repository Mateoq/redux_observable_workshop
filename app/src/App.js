import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import Login from './Login';
import Home from './Home';
import Loading from './Loading';
import Toast from './Toast';

import { LOGIN, HOME } from './constants';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path={LOGIN}
            component={Login}
          />
          <Route
            path={HOME}
            component={Home}
          />
        </Switch>
        <Loading />
        <Toast />
      </div>
    );
  }
}

export default App;
