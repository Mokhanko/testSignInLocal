import React from "react";
import {connect} from 'react-redux'
import {
  changeCheckEmail,
  changeCheckPassword,
  changeCheckRePassword,
  changeEmail,
  changeEmailError,
  changeName,
  changePassword,
  changePasswordError,
  changeRePassword,
  logInUser,
  registerUser,
} from '../reducers/authReducer'
import Loader from './components/loader'



const mapStateToProps = (state) => {
  return {
    email: state.users.user_email,
    password: state.users.user_password,
    name: state.users.user_name,
    rePassword: state.users.user_rePassword,
    check_email: state.users.check_email,
    check_password: state.users.check_password,
    check_repassword: state.users.check_repassword,
    email_error: state.users.email_error,
    password_error: state.users.password_error,
    registration_error: state.users.registration_error,
    percentage: state.users.percentage,
    loading_signin: state.users.loading_signin,
    loading_reg: state.users.loading_reg,
    token: state.users.token
  }
};

const mapDispatchToProps = dispatch => ({
  changeEmail: (a) => dispatch(changeEmail(a)),
  changeName: (a) => dispatch(changeName(a)),
  changePassword: (a) => dispatch(changePassword(a)),
  logInUser: (email, paswword) => dispatch(logInUser(email, paswword)),
  changeCheckEmail: (a) => dispatch(changeCheckEmail(a)),
  changeCheckPassword: (a) => dispatch(changeCheckPassword(a)),
  changeCheckRePassword: (a) => dispatch(changeCheckRePassword(a)),
  changeRePassword: (a) => dispatch(changeRePassword(a)),
  changeEmailError: (a) => dispatch(changeEmailError(a)),
  changePasswordError: (a) => dispatch(changePasswordError(a)),
  registerUser: (email, name, password) => dispatch(registerUser(email, name, password))
});


class Login extends React.Component {

  logIn = (e, email, pass) => {
    e.preventDefault();
    this.props.logInUser(email, pass);
  };

  register = (e, email, name, pass) => {
    e.preventDefault();
    this.props.registerUser(email, name, pass);
  };


  handleUserInput = (fieldname, value) => {
    switch (fieldname) {
      case 'email':
        this.props.changeEmailError('');
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
        if (emailValid) {
          this.props.changeEmail(value);
          this.props.changeCheckEmail(true);
        }
        else {
          this.props.changeEmail('');
          this.props.changeCheckEmail(false);
        }
        break;
      case 'name':
        this.props.changeName(value);
        break;
      case 'password':
        this.props.changePasswordError('');
        let passwordValid = value.length >= 3;
        if (passwordValid) {
          this.props.changePassword(value);
          this.props.changeCheckPassword(true);
        }
        else {
          this.props.changePassword('');
          this.props.changeCheckPassword(false);
        }
        break;
      case 'repassword':
        if (this.props.password === value) {
          this.props.changeRePassword(value);
          this.props.changeCheckRePassword(true);
        }
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="userPanel">
        <div className="signin_block">
          <h2 className="form-signin-heading text-center">Sign In</h2>
          {this.props.loading_signin && <Loader/>}
          <form className="form-signin">
            {this.props.email_error === '' ? null : (<div className="text-danger">{this.props.email_error}</div>)}
            <div className={`form-group ${this.props.check_email ? '' : 'has-error'}`}>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="text" name="email" id="inputEmail" className="form-control"
                     placeholder="Email address" onChange={e => this.handleUserInput(e.target.name, e.target.value)}/>
            </div>
            {this.props.password_error === '' ? null : (<div className="text-danger">{this.props.password_error}</div>)}
            <div className={`form-group ${this.props.check_password ? '' : 'has-error'}`}>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" name="password" id="inputPassword" className="form-control"
                     placeholder="Password" onChange={e => this.handleUserInput(e.target.name, e.target.value)}/>
            </div>
            <button className='btn btn-lg btn-primary btn-block'
                    disabled={!(this.props.check_email && this.props.check_password)}
                    onClick={(e) => this.logIn(e, this.props.email, this.props.password)}>Sign in
            </button>
          </form>

        </div>
        <div className="register_block">
          {this.props.loading_reg && <Loader/>}
          {this.props.registration_error === '' ? null : (
            <div className="text-danger text-center">{this.props.registration_error}</div>)}
          <h2 className="form-reg-heading text-center">Register</h2>
          <form className="form-reg">
            <div className={`form-group ${this.props.check_email ? '' : 'has-error'}`}>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="text" name="email" id="inputRegEmail" className="form-control"
                     placeholder="Email address" onChange={e => this.handleUserInput(e.target.name, e.target.value)}/>
            </div>
            <div className={`form-group ${this.props.check_email ? '' : 'has-error'}`}>
              <label htmlFor="inputNick" className="sr-only">Nick Name</label>
              <input type="text" name="name" id="inputRegNickName" className="form-control"
                     placeholder="Nick Name" onChange={e => this.handleUserInput(e.target.name, e.target.value)}/>
            </div>
            <div className={`form-group ${this.props.check_password ? '' : 'has-error'}`}>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" name="password" id="inputRegPassword" className="form-control"
                     placeholder="Password" onChange={e => this.handleUserInput(e.target.name, e.target.value)}/>
            </div>
            {this.props.check_repassword === true ? null : (
              <div className="text-danger">Passwords does not much!</div>)}
            <div className={`form-group ${this.props.check_password ? '' : 'has-error'}`}>
              <label htmlFor="inputRePassword" className="sr-only">Repassword</label>
              <input type="password" name="repassword" id="inputRegRePassword" className="form-control"
                     placeholder="Repassword" onChange={e => this.handleUserInput(e.target.name, e.target.value)}/>
            </div>
            <button className='btn btn-lg btn-primary btn-block'
                    disabled={!(this.props.check_email && this.props.check_password && this.props.check_repassword)}
                    onClick={(e) => this.register(e, this.props.email, this.props.name, this.props.password)}>Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);