import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import './styles.css'
import portfolio from './images/portfolio.jpg';
import { logOutUser } from '../../reducers/authReducer'

const mapStateToProps = (state) => ({
  name: state.users.show_name
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
});

class Header extends React.Component {

   render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/"><img alt="portfolio" src={portfolio} width="100" height="50"/></Link>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#/">Wellcome {this.props.name}</a></li>
                <li><button className='btn_logout' onClick={ this.props.logOutUser }><i className="fas fa-sign-out-alt"></i></button></li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/galery">Gallery</Link></li>
                <li><Link to="/about">About me</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);