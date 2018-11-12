import React from "react";
import {Link} from "react-router-dom";
import './styles.css'
import portfolio from './images/portfolio.jpg';
import {STORAGE} from './../../services';

import {Modal} from "react-bootstrap";

const inputs = [
  {
    name: "email",
    type: 'text',
    emailError: true
  },
  {
    name: 'password',
    type: 'password',
    passwordError: true
  },
  {
    name: 'repassword',
    type: 'password',
    repasswordError: true,
  }
];

class Header extends React.Component {

  // state = {
  //   showSignIn: false,
  //   showRegister: false,
  //   email: "",
  //   password: "",
  //   rePassword: "",
  //   user:"Anonymus"
  // }
  //
  // handleUserReg = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({[name]: value});
  // }
  //
  // handleUserSignIn = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({[name]: value});
  // }
  //
  // registerUser = () => {
  //   console.log(this.state.email + " " + this.state.password);
  //   STORAGE.set(this.state.email, this.state.password);
  // }
  //
  // signInUser = () =>{
  //   let pass = STORAGE.get(this.state.email);
  //   let userStorage = STORAGE.getKey(this.state.email);
  //   if (pass == null){
  //     alert("FuckOFF");
  //   }
  //   else if(pass!==this.state.password){
  //     alert("wrong password");
  //   }
  //   else{
  //     alert("Wellcome "+ userStorage);
  //     this.setState({user:userStorage});
  //   }
  // }//old form



  state = {
    showSignIn: false,
    showRegister: false,
    user: "Anonymus"
  }

  componentDidMount() {
    let email = STORAGE.get('LOGIN');
    this.setState({
      user:email
    });
  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => this.validateField(name, value));
  }

  validateField(fieldName, value) {

    switch (fieldName) {
      case 'email':
        let emailValid = this.state.emailError;
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
        console.log("EmailValid is " + emailValid);
        this.setState({emailError: !emailValid});
        break;
      case 'password':
        let passwordValid = this.state.passwordError;
        passwordValid = value.length >= 3;
        console.log("passwordValid is " + passwordValid);
        this.setState({passwordError: !passwordValid});
        break;
      case 'repassword':
        let repasswordValid = this.state.repasswordError;
        repasswordValid = this.state.password === this.state.repassword;
        console.log("repasswordValid is " + repasswordValid);
        this.setState({repasswordError: !repasswordValid});
        break;
      default:
        break;
    }

    console.log("EmailError is " + this.state.emailError);
    console.log("passwordError is " + this.state.passwordError);
    console.log("repasswordError is " + this.state.repasswordError);
  }

  signInUser = () => {
    let pass = STORAGE.get(this.state.email);
    if (pass == null) {
      alert("FuckOFF");
    }
    else if (pass !== this.state.password) {
      alert("wrong password");
    }
    else {
      alert("Wellcome ");
      //this.setState({user: userStorage});
    }
  }

  registerUser = () => {
    let email = STORAGE.get('LOGIN');
    let pass = STORAGE.get('PASSWORD');
    if (this.state.emailError === false && this.state.passwordError === false && this.state.repasswordError === false){
      alert("Wellcome to the club " + this.state.email);
      STORAGE.set('LOGIN', this.state.email);
      STORAGE.set('PASSWORD', this.state.password);
    }
    else {
      alert("There is a trouble in inputs");
    }
  }

  render() {
    return (
      <div>

        <Modal show={this.state.showSignIn} onHide={() => this.setState({showSignIn: !this.state.showSignIn})}>
          <Modal.Header closeButton title={null}/>
          <Modal.Body>
            <h3 className="text-center">Sign In form</h3>
            {/*<form className="form-signin">*/}
            {/*<label htmlFor="signEmail" className="sr-only">Email address</label>*/}
            {/*<input type="email" name="email" id="signEmail" className="form-control" placeholder="Email address" required*/}
            {/*autoFocus onChange={this.handleUserSignIn}/>*/}
            {/*<label htmlFor="signPassword" className="sr-only">Password</label>*/}
            {/*<input type="password" name="password" id="signPassword" className="form-control" placeholder="Password" required onChange={this.handleUserSignIn}/>*/}
            {/*<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.signInUser}>Sign in</button>*/}
            {/*</form>*/}
            <form className="form-horizontal">
              {inputs.filter(el => el.name !== 'repassword').map((a, i) => {
                return (
                  <div className={`form-group ${this.state[`${a.name}Error`] ? "has-error" : ""}`} key={i}>
                    <label className="col-lg-offset-2 col-lg-3 control-label">{a.name}</label>
                    <div className="col-lg-5">
                      <input type={a.type} name={a.name} value={this.state[a.name]} className="form-control"
                             placeholder={a.name}
                             onChange={this.handleUserInput}/>
                    </div>
                  </div>
                )
              })}
              <div className="form-group">
                <div className="col-lg-offset-5 col-lg-5">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox"/> Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-offset-5 col-lg-5">
                  <button type="submit" className="btn btn-default" onClick={this.signInUser}>Sign in</button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>{/*Sign in Modal Window*/}

        <Modal show={this.state.showRegister} onHide={() => this.setState({showRegister: !this.state.showRegister})}>
          <Modal.Header closeButton title={null}/>
          <Modal.Body>
            <h3 className="text-center">Register form</h3>
            <form className="form-horizontal">
              {inputs.map((a, i) => {
                return (
                  <div className={`form-group ${this.state[`${a.name}Error`] ? "has-error" : ""}`} key={i}>
                    <label className="col-lg-offset-2 col-lg-3 control-label">{a.name}</label>
                    <div className="col-lg-5">
                      <input type={a.type} name={a.name} value={this.state[a.name]} className="form-control"
                             placeholder={a.name}
                             onChange={this.handleUserInput}/>
                    </div>
                  </div>
                )
              })}
              <div className="form-group">
                <div className="col-lg-offset-5 col-lg-5">
                  <button type="submit" className="btn btn-default" onClick={this.registerUser}>Register</button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>{/*Registration Modal Window*/}

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/"><img alt="portfolio" src={portfolio} width="100" height="50"/></Link>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#" onClick={() => this.setState({showSignIn: !this.state.showSignIn})}>Sign in</a></li>
                <li><a href="#" onClick={() => this.setState({showRegister: !this.state.showRegister})}>Register</a></li>
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