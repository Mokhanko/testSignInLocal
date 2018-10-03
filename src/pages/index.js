import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home'
import About from './about'
import Contacts from './contacts'
import Galery from './galery'
import NoMatch from './nomatch'
import Header from './components/header'
import Footer from './components/footer'



const BasicExample = () => (
  <Router>
<<<<<<< HEAD
      <div className="container">
=======
      <div className="container main-container">
>>>>>>> 1f2123827471ca2ffd39a088cd6c9f1f0d355684
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/galery" component={Galery} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
  </Router>
);

export default BasicExample;