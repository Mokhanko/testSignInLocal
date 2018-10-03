import React from "react";
import {Link} from "react-router-dom";
import './styles.css'
import portfolio from './images/portfolio.jpg';
import {STORAGE} from './../../services';

import {Modal} from "react-bootstrap";


class Header extends React.Component {

  state = {
    showSignIn: false,
    showRegister: false,
    email: "",
    password: "",
    rePassword: "",
    user:"Anonymus"
  }

  handleUserReg = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  registerUser = () => {
    console.log(this.state.email + " " + this.state.password);
    STORAGE.set(this.state.email, this.state.password);
  }

  handleUserSignIn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  signInUser = () =>{
    let pass = STORAGE.get(this.state.email);
    let userStorage = STORAGE.getKey(this.state.email);
    if (pass == null){
      alert("FuckOFF");
    }
    else if(pass!==this.state.password){
      alert("wrong password");
    }
    else{
      alert("Wellcome "+ userStorage);
      this.setState({user:userStorage});
    }
  }


  render() {
    return (
      <div>

        <Modal show={this.state.showSignIn} onHide={() => this.setState({showSignIn: !this.state.showSignIn})}>
          <Modal.Header closeButton title={null}/>
          <Modal.Body>
            <h3 className="text-center">Sign In form</h3>
            <form className="form-signin">
              <label htmlFor="signEmail" className="sr-only">Email address</label>
              <input type="email" name="email" id="signEmail" className="form-control" placeholder="Email address" required
                     autoFocus onChange={this.handleUserSignIn}/>
              <label htmlFor="signPassword" className="sr-only">Password</label>
              <input type="password" name="password" id="signPassword" className="form-control" placeholder="Password" required onChange={this.handleUserSignIn}/>
              <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.signInUser}>Sign in</button>
            </form>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showRegister} onHide={() => this.setState({showRegister: !this.state.showRegister})}>
          <Modal.Header closeButton title={null}/>
          <Modal.Body>
            <h3 className="text-center">Register form</h3>
            <form className="form-signin">
              <label htmlFor="regEmail" className="sr-only">Email address</label>
              <input type="email" name="email" id="regEmail" className="form-control" placeholder="Email address"
                     required
                     autoFocus onChange={this.handleUserReg}/>
              <label htmlFor="regPassword" className="sr-only">Password</label>
              <input type="password" name="password" id="regPassword" className="form-control" placeholder="Password"
                     required onChange={this.handleUserReg}/>
              <label htmlFor="regPassword" className="sr-only">Repassword</label>
              <input type="password" name="rePassword" id="regRePassword" className="form-control"
                     placeholder="Repassword" required onChange={this.handleUserReg}/>
              <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.registerUser}>Register
              </button>
            </form>
          </Modal.Body>
        </Modal>

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/"><img alt="portfolio" src={portfolio} width="100" height="50"/></Link>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#" onClick={() => this.setState({showSignIn: !this.state.showSignIn})}>Sign in</a></li>
                <li><a href="#" onClick={() => this.setState({showRegister: !this.state.showRegister})}>Register</a>
                </li>
                <li><a href="#">{this.state.user}</a></li>
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

export default Header;