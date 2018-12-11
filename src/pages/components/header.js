import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {compose, pure, setDisplayName} from 'recompose'
import './styles.css'
import portfolio from './images/portfolio.jpg';
import { logOutUser, isUserLogged } from '../../reducers/authReducer'


const Header = ({name, logOutUser}) => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/"><img alt="portfolio" src={portfolio} width="100" height="50"/></Link>
          {name &&<ul className="nav navbar-nav navbar-right">
            <li><a href="#/">Wellcome {name}</a></li>
            <li>
              <button className='btn_logout' onClick={logOutUser}>
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </li>
          </ul>}
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

export default compose(
  connect(
    (state) => ({
      name: state.users.show_name,
      token: state.users.token
    }),
    {
      logOutUser,
      isUserLogged
    }
  ),
  setDisplayName('Header element'),
  pure
)(Header);