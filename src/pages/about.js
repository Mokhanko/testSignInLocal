import React from "react";
import Body from "./components/body"

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


class About extends React.Component {
  state = {
    email: "",
    password: "",
    repassword: "",
  }

  // onChange = (e) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   // let isValid = e.target.value.length > 0 ? true : false;
  //   this.setState({[e.target.name]: e.target.value});
  //   //() => { this.validateField(e.target.name, e.target.value) 
  //   //[`${e.target.name}Error`]: isValid
  //   // console.log(this.state[`${e.target.name}Error`]);
  // }
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

  }

  render() {
    return (
      <Body title={"About Me"}>
      <form className="form-horizontal">
        {inputs.map((a, i) => {
          return (
            <div className={`form-group ${this.state[`${a.name}Error`] ? "has-error" : ""}`} key={i}>
              <label className="col-lg-offset-2 col-lg-3 control-label">{a.name}</label>
              <div className="col-lg-5">
                <input type={a.type} name={a.name} className="form-control" placeholder={a.name}
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