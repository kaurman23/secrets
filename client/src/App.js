import React from 'react';
import './App.css';
import {Main} from "./components/Main";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      
    </Router>
  );
}

export default App;
