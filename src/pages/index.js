import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {connect} from 'react-redux'
import Home from './home'
import Login from './login'
import About from './about'
import Contacts from './contacts'
import Gallery from './galery'
import NoMatch from './nomatch'
import Public from '../services/public'
import Private from '../services/private'
import Header from './components/header'
import Footer from './components/footer'
import { isUserLogged } from "../reducers/authReducer";


const mapStateToProps = (state) => ({
  token: state.users.token
});

const mapDispatchToProps = dispatch => ({
  isUserLogged: () => dispatch(isUserLogged())
});

class BasicExample extends React.Component {

  componentDidMount(){
    this.props.isUserLogged();
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header/>
          <Switch>
            <Private exact path="/" component={Home}/>
            <Public exact path="/login" component={Login}/>
            <Private path="/galery" component={Gallery}/>
            <Private path="/about" component={About}/>
            <Private path="/contacts" component={Contacts}/>
            <Private component={NoMatch}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BasicExample);