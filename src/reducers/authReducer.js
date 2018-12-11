import STORAGE from '../services/localStore'
import request from '../services/axiosMethods'

const CHANGE_EMAIL = "CHANGE_EMAIL";
const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_PASSWORD = "CHANGE_PASSWORD";
const CHANGE_REPASSWORD = "CHANGE_REPASSWORD";
const CHANGE_SHOWNAME = "CHANGE_SHOWNAME";
const CHANGE_TOKEN = "CHANGE_TOKEN";
const CHANGE_CHECK_EMAIL = "CHANGE_CHECK_EMAIL";
const CHANGE_CHECK_PASSWORD = "CHANGE_CHECK_PASSWORD";
const CHANGE_CHECK_REPASSWORD = "CHANGE_CHECK_REPASSWORD";
const CHANGE_EMAIL_ERROR = "CHANGE_EMAIL_ERROR";
const CHANGE_PASSWORD_ERROR = "CHANGE_PASSWORD_ERROR";
const CHANGE_REGISTRATION_ERROR = "CHANGE_REGISTRATION_ERROR";
const LOADING_SIGNIN = "LOADING_SIGNIN";
const LOADING_REG = "LOADING_REG";


const initialState = {
  user_email: "",
  user_name: "",
  user_password: "",
  user_rePassword: "",
  show_name: "",
  token: STORAGE.get("TOKEN"),
  check_email: false,
  check_password: false,
  check_repassword: false,
  email_error: null,
  password_error: null,
  registration_error: null,
  loading_signin: false,
  loading_reg: false
};

export const logInUser = (email, password) => dispatch => {
  dispatch(loadingSignIn(true));
  return setTimeout(() => request({url: '/auth/sign_in', method: 'POST', data: {email, password}})
    .then(response => {
      dispatch(loadingSignIn(false));
      if (response.data.token) {
        STORAGE.set("TOKEN", response.data && response.data.token);
        dispatch(changeToken(STORAGE.get("TOKEN")));
        dispatch(changeEmail(''));
        dispatch(changePassword(''));
      }
    })
    .catch(error => {
        dispatch(loadingSignIn(false));
        switch (JSON.stringify(error.response.status)) {
          case '401':
            dispatch(changeEmailError(JSON.stringify(error.response.data.message)));
            break;
          case '402':
            dispatch(changePasswordError(JSON.stringify(error.response.data.message)));
            break;
          default:
            break;
        }
        throw(error);
      }
    )
  )
};

export const logOutUser = () => dispatch => {
  STORAGE.remove("TOKEN");
  dispatch(changeToken(STORAGE.get("TOKEN")));
  dispatch(changeShowName(''));
};

export const isUserLogged = () => dispatch => {
  return request({ url: '/auth/login_required', method: 'POST' })
    .then(response => {
      if (response.data) {
        dispatch(changeShowName(response.data.name));
      }
    })
    .catch(error => {
    });
};

export const registerUser =(email, name, password) => dispatch => {
  dispatch(loadingReg(true));
  return setTimeout(() => request({ url: '/auth/register', method: 'POST', data: { email, name,password } })
    .then(response => {
      if(response.data){
        dispatch(loadingReg(false));
        dispatch(logInUser(email, password));
        dispatch(changeEmail(''));
        dispatch(changePassword(''));
      }
    })
    .catch(error => {
      dispatch(loadingReg(false));
      dispatch(changeRegistrationError(JSON.stringify(error.response.data.message)))
    }), 3000)
};

export const changeEmail = email => ({
  type: "CHANGE_EMAIL",
  email
});

export const changeName = name => ({
  type: "CHANGE_NAME",
  name
});

export const changePassword = password => ({
  type: "CHANGE_PASSWORD",
  password
});

export const changeRePassword = rePassword => ({
  type: "CHANGE_REPASSWORD",
  rePassword
});

export const changeToken = token => ({
  type: "CHANGE_TOKEN",
  token
});

export const changeCheckEmail = check => ({
  type: "CHANGE_CHECK_EMAIL",
  check
});

export const changeCheckPassword = check => ({
  type: "CHANGE_CHECK_PASSWORD",
  check
});

export const changeCheckRePassword = check => ({
  type: "CHANGE_CHECK_REPASSWORD",
  check
});

export const changeEmailError = error => ({
  type: "CHANGE_EMAIL_ERROR",
  error
});

export const changePasswordError = error => ({
  type: "CHANGE_PASSWORD_ERROR",
  error
});

export const changeRegistrationError = error => ({
  type: "CHANGE_REGISTRATION_ERROR",
  error
});



export const loadingSignIn = payload => ({
  type: "LOADING_SIGNIN",
  payload
});

export const loadingReg = payload => ({
  type: "LOADING_REG",
  payload
});

export const changeShowName = payload => ({
  type: "CHANGE_SHOWNAME",
  payload
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return Object.assign({}, state, {
        user_email: action.email
      });
    case CHANGE_NAME:
      return Object.assign({}, state, {
        user_name: action.name
      });
    case CHANGE_PASSWORD:
      return Object.assign({}, state, {
        user_password: action.password
      });
    case CHANGE_REPASSWORD:
      return Object.assign({}, state, {
        user_rePassword: action.rePassword
      });
    case CHANGE_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      });
    case CHANGE_CHECK_EMAIL:
      return Object.assign({}, state, {
        check_email: action.check
      });
    case CHANGE_CHECK_PASSWORD:
      return Object.assign({}, state, {
        check_password: action.check
      });
    case CHANGE_CHECK_REPASSWORD:
      return Object.assign({}, state, {
        check_repassword: action.check
      });
    case CHANGE_EMAIL_ERROR:
      return Object.assign({}, state, {
        email_error: action.error
      });
    case CHANGE_PASSWORD_ERROR:
      return Object.assign({}, state, {
        password_error: action.error
      });
    case CHANGE_REGISTRATION_ERROR:
      return Object.assign({}, state, {
       registration_error: action.error
      });
    case LOADING_SIGNIN:
      return Object.assign({}, state, {
        loading_signin: action.payload
      });
    case LOADING_REG:
      return Object.assign({}, state, {
        loading_reg: action.payload
      });
    case CHANGE_SHOWNAME:
      return Object.assign({}, state, {
        show_name: action.payload
      });
    default:
      return state;
  }
};

export default authReducer;