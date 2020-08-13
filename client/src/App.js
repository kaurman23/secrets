import React from 'react';
import './App.css';
import {Main} from "./components/Main";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from "./store";

function App() {
  return (
    // provider makes store avail to every component
    <Provider store={store}>
      <Router >
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
    
  );
}

export default App;
