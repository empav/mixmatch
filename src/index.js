import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './components/Game';
import Login from './components/Login';
import { StoreProvider } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <StoreProvider>
            <Game />
          </StoreProvider>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
