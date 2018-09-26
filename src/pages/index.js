import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './home'
import About from './about'
import Contacts from './contacts'
import Topics from './topics'
import NoMatch from './nomatch'

const divStyle = {
  color: 'blue',
  border: '1px solid red',
};

const menuStyle = {

};

const BasicExample = () => (
  <Router>
    <div class="container" style={divStyle}>
      <nav class="navbar navbar-custom">
        <div class="container-fluid navbar-header">
            <a class="navbar-brand" href="#">Portfolio</a>
          <div id="navbar" class="navbar-header" >
            <ul class="nav navbar-nav" style={menuStyle}>
              <li class="active"><Link to="/home">Home</Link></li>
              <li><Link to="/about">About me</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Features <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Past</a></li>
                  <li><a href="#">Presenr (on Action)</a></li>
                  <li><a href="#">Future plans</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/topics" componednt={Topics} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route component={NoMatch} />
    </Switch>
    </div>
  </Router>
);

export default BasicExample;