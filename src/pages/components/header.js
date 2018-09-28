import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
import portfolio from './images/portfolio.jpg';

const Header = () => {
  // <div class="header">
  //   <div className="row">
  //     <div className="col-md-6 col-md-offset-6">
  //       <nav class="navbar navbar-custom">
  //         <div class="container-fluid navbar-header">
  //           <div id="navbar" class="navbar-header" >
  //             <ul class="nav navbar-nav menu header">
  //               <li class="active logo"><Link to="/">Portfolio</Link></li>
  //               <li class="active"><Link to="/">Home</Link></li>
  //               <li><Link to="/about">About me</Link></li>
  //               <li><Link to="/contacts">Contacts</Link></li>
  //             </ul>
  //           </div>
  //         </div>
  //       </nav>
  //     </div>
  //   </div>
  // </div>

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/"><img alt="portfolio" src={portfolio} width="100" height="50" /></Link>
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
  );
}
export default Header;