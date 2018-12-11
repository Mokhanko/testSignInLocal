import React from "react"
import {connect} from 'react-redux'
import { compose, withHandlers, pure, setDisplayName } from 'recompose'
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
  registerUser
} from '../reducers/authReducer'
import Loader from './components/loader'
import LogGraphs from './components/logPageGraphics'

const Login = ({
 email, password, name, rePassword, check_email, check_password, check_repassword, email_error, password_error,
 registration_error, percentage, loading_signin, loading_reg, token, changeCheckEmail, changeCheckPassword,
 changeCheckRePassword, changeEmail, changeEmailError, changeName, changePassword, changeRePassword,
 changePasswordError, logInUser, registerUser, logIn, register, handleUserInput}) => (
  <div>
    <LogGraphs/>
    <div className="userPanel">
      <div className="signin_block">
        <h2 className="form-signin-heading text-center">
          Sign In
        </h2>
        {loading_signin && <Loader/>}
        <form className="form-signin">
          {email_error === '' ? null : (<div className="text-danger">{email_error}</div>)}
          <div className={`form-group ${check_email ? '' : 'has-error'}`}>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input
              type="text"
              name="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              onChange={e => handleUserInput(e.target.name, e.target.value)}
            />
          </div>
          {password_error === '' ? null : (<div className="text-danger">{password_error}</div>)}
          <div className={`form-group ${check_password ? '' : 'has-error'}`}>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" name="password" id="inputPassword" className="form-control"
                   placeholder="Password" onChange={e => handleUserInput(e.target.name, e.target.value)}/>
          </div>
          <button className='btn btn-lg btn-primary btn-block'
                  disabled={!(check_email && check_password)}
                  onClick={(e) => logIn(e, email, password)}>
            Sign in
          </button>
        </form>
      </div>
      <div className="register_block">
        {loading_reg && <Loader/>}
        {registration_error === '' ? null : (
          <div className="text-danger text-center">{registration_error}</div>)}
        <h2 className="form-reg-heading text-center">
          Register
        </h2>
        <form className="form-reg">
          <div className={`form-group ${check_email ? '' : 'has-error'}`}>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="text"
                   name="email"
                   id="inputRegEmail"
                   className="form-control"
                   placeholder="Email address"
                   onChange={e => handleUserInput(e.target.name, e.target.value)}/>
          </div>
          <div className={`form-group ${check_email ? '' : 'has-error'}`}>
            <label htmlFor="inputNick" className="sr-only">Nick Name</label>
            <input type="text"
                   name="name"
                   id="inputRegNickName"
                   className="form-control"
                   placeholder="Nick Name"
                   onChange={e => handleUserInput(e.target.name, e.target.value)}/>
          </div>
          <div className={`form-group ${check_password ? '' : 'has-error'}`}>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password"
                   name="password"
                   id="inputRegPassword"
                   className="form-control"
                   placeholder="Password"
                   onChange={e => handleUserInput(e.target.name, e.target.value)}/>
          </div>
          {check_repassword === true ? null : (
            <div className="text-danger">Passwords does not much!</div>)}
          <div className={`form-group ${check_password ? '' : 'has-error'}`}>
            <label htmlFor="inputRePassword" className="sr-only">Repassword</label>
            <input type="password"
                   name="repassword"
                   id="inputRegRePassword"
                   className="form-control"
                   placeholder="Repassword"
                   onChange={e => handleUserInput(e.target.name, e.target.value)}/>
          </div>
          <button className='btn btn-lg btn-primary btn-block'
                  disabled={!(check_email && check_password && check_repassword)}
                  onClick={(e) => register(e, email, name, password)}>Register
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default compose(
  connect(
    (state) => ({
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
    }),
    {
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
      registerUser
    }
  ),
  withHandlers({
    logIn: props => (e) => {
      e.preventDefault();
      props.logInUser(props.email, props.password);
    },
    register: props => (e) => {
      e.preventDefault();
      props.registerUser(props.email, props.name, props.password);
    },
    handleUserInput: props => (fieldname, value) => {
      switch (fieldname) {
        case 'email':
          props.changeEmailError('');
          let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
          if (emailValid) {
           props.changeEmail(value);
           props.changeCheckEmail(true);
          }
          else {
            props.changeEmail('');
            props.changeCheckEmail(false);
          }
          break;
        case 'name':
          props.changeName(value);
          break;
        case 'password':
          props.changePasswordError('');
          let passwordValid = value.length >= 3;
          if (passwordValid) {
            props.changePassword(value);
            props.changeCheckPassword(true);
          }
          else {
            props.changePassword('');
            props.changeCheckPassword(false);
          }
          break;
        case 'repassword':
          if (props.password === value) {
           props.changeRePassword(value);
           props.changeCheckRePassword(true);
          }
          break;
        default:
          break;
      }
    }
  }),
  setDisplayName('Login form'),
  pure
)(Login);