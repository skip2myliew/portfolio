import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/portfolio" component={App}>
    {/*
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    */}
    </Route>
  </Router>
), document.getElementById('root'));
