import React from "react";
import Body from "./components/body"
import { STORAGE } from './../services';

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

const UserGreeting = (props) => {
  return (
    <h3 className="text-center">Wellcome back {props}</h3>
  )
}
const GuestGreeting = (props) => <h3 className="text-center">Hi there Stranger</h3>

const Greeting = (props) => {
  const isLoggedIn = props.isLogged;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  else{
    return <GuestGreeting/>;
  }

}

class About extends React.Component {
  state = {
    email: "",
    password: "",
    repassword: "",
    isLogged: false
  }

  componentDidMount() {
    let email = STORAGE.get('zalypa');
    this.setState({
      email
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
        passwordValid = value.length >= 6;
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
<<<<<<< HEAD

    console.log("EmailError is " + this.state.emailError);
    console.log("passwordError is " + this.state.passwordError);
    console.log("repasswordError is " + this.state.repasswordError);
=======
    console.log("EmailError is " + this.state.emailError);
    console.log("passwordError is " + this.state.passwordError);
    console.log("repasswordError is " + this.state.repasswordError);
  }

  onSignIn = (e) => {
    if (this.state.emailError === false && this.state.passwordError === false && this.state.repasswordError === false) {
      alert("OK");
    }
    else {
      alert("Fill all fields");
    }

>>>>>>> 1f2123827471ca2ffd39a088cd6c9f1f0d355684
  }

  onSignIn = (e) => {
    STORAGE.set('zalypa', this.state.email)
  };

  render() {
    return (
      <Body title={"About Me"}>
<<<<<<< HEAD
      <Greeting isLoggedIn={this.state.isLogged}/>
=======
>>>>>>> 1f2123827471ca2ffd39a088cd6c9f1f0d355684
      <form className="form-horizontal">
        {inputs.map((a, i) => {
          return (
            <div className={`form-group ${this.state[`${a.name}Error`] ? "has-error" : ""}`} key={i}>
              <label className="col-lg-offset-2 col-lg-3 control-label">{a.name}</label>
              <div className="col-lg-5">
<<<<<<< HEAD
                <input type={a.type} name={a.name} value={this.state[a.name]} className="form-control" placeholder={a.name}
=======
                <input type={a.type} name={a.name} className="form-control" placeholder={a.name}
>>>>>>> 1f2123827471ca2ffd39a088cd6c9f1f0d355684
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
            <button type="submit" className="btn btn-default" onClick={this.onSignIn}>Sign in</button>
          </div>
        </div>
      </form>
      </Body>
    );
  }
}

export default About;