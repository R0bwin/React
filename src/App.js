import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Home } from './Home.js';
import { About } from './About.js';
import { Contact } from './Contact.js';
import { NoMatch } from './NoMatch.js';

function App() {
  return (
    <React.Fragment>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>

    </React.Fragment>
  );
}

export default App;
