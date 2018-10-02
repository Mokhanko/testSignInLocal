import React from "react";
import Body from "./components/body"

const inputs = [
  {
    name: "email",
    type: 'text',
    emailError: false
  },
  {
    name: 'password',
    type: 'password',
    passwordError: false
  },
  {
    name: 'repassword',
    type: 'password',
    repasswordError: false,
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

  validateField (fieldName, value){
    let emailValid = this.state.emailError;
    let passwordValid = this.state.passwordError;
    let repasswordValid = this.state.repasswordError;
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
        console.log("EmailValid is "+ emailValid);
        break;
      case 'password':
        passwordValid = value.length >= 6;
        console.log("passwordValid is "+ passwordValid);
        break;
      case 'repassword':
        repasswordValid = this.state.password === this.state.repassword;
        console.log("repasswordValid is "+ repasswordValid);
        break;
      default:
        break;
    }
    this.setState({
                    emailError: emailValid,
                    passwordError: passwordValid,
                    repasswordError: repasswordValid
                  });
    console.log("EmailError is "+ this.state.emailError);
    console.log("passwordError is "+ this.state.passwordError);     
    console.log("repasswordError is "+ this.state.repasswordError);  
  }
  
  onSignIn = (e) =>{
    if(this.state.emailError === true && this.state.passwordError === true && this.state.repasswordError === true){
      alert("OK");
    }
    else{
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
                  <input type={a.type} name={a.name} className="form-control" placeholder={a.name} onChange={this.handleUserInput}/>
                </div>
              </div>
            )
          })}
          <div className="form-group">
            <div className="col-lg-offset-5 col-lg-5">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Remember me
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

// const About = () => (
//   <Body title={"About Me"}>
//     <div>
//       <User />
//     </div>
//   </Body>
// );

export default About;