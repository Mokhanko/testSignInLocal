import STORAGE from '../services/localStore'
import request from '../services/axiosMethods'

const CHANGE_EMAIL = "CHANGE_EMAIL";
const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_PASSWORD = "CHANGE_PASSWORD";
const CHANGE_REPASSWORD = "CHANGE_REPASSWORD";
const CHANGE_TOKEN = "CHANGE_TOKEN";
const CHANGE_CHECK_EMAIL = "CHANGE_CHECK_EMAIL";
const CHANGE_CHECK_PASSWORD = "CHANGE_CHECK_PASSWORD";
const CHANGE_CHECK_REPASSWORD = "CHANGE_CHECK_REPASSWORD";
const CHANGE_EMAIL_ERROR = "CHANGE_EMAIL_ERROR";
const CHANGE_PASSWORD_ERROR = "CHANGE_PASSWORD_ERROR";
const CHANGE_REGISTRATION_ERROR = "CHANGE_REGISTRATION_ERROR";
const CHANGE_PERCENTAGE = "CHANGE_PERCENTAGE";
const LOADING = "LOADING";


const initialState = {
  user_email: "",
  user_name: "",
  user_password: "",
  user_rePassword: "",
  token: STORAGE.get("TOKEN"),
  check_email: false,
  check_password: false,
  check_repassword: false,
  email_error: null,
  password_error: null,
  registration_error: null,
  loading: false
};




export const logInUser = (email, password) => dispatch => {
  dispatch(loading(true));
  return setTimeout(() => request({ url:'/auth/sign_in', method: 'POST', data: { email, password }})
    .then(response => {
      dispatch(loading(false));
      if (response.data) {
        STORAGE.set("TOKEN", response.data && response.data.token);
        dispatch(changeToken(STORAGE.get("TOKEN")));
        dispatch(changeEmail(''));
        dispatch(changePassword(''));
      }
    })
    .catch(error => {
      dispatch(loading(false));
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
    }),3000);
};

export const isUserLogged = () => dispatch => {
  return request({ url: '/auth/login_required', method: 'POST' })
    .then(response => {
      if (response.data) {
        dispatch(changeName(response.data.name));
      }
    })
    .catch(error => {
      STORAGE.remove("TOKEN");
      dispatch(changeToken(STORAGE.get("TOKEN")));
      throw(error);
    });
};

export const registerUser =(email, name, password) => dispatch => {
  return request({ url: '/auth/register', method: 'POST', data: { email, name,password } })
    .then(response => {
      if(response.data){
        dispatch(changeEmail(''));
        dispatch(changePassword(''));
      }
    })
    .catch(error => {
      dispatch(changeRegistrationError(JSON.stringify(error.response.data.message)))
    })
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

export const changePercentage = value => ({
  type: "CHANGE_PERCENTAGE",
  value
});

export const loading = loading => ({
  type: "LOADING",
  loading
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
    case CHANGE_PERCENTAGE:
      return Object.assign({}, state, {
        percentage: action.value
      });
    case LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      });
    default:
      return state;
  }
};

export default authReducer;