import request from '../services/axiosMethods'

const ON_CHANGE_CRYPTODATA = 'ON_CHANGE_CRYPTODATA';
const ON_CHANGE_COINS = 'ON_CHANGE_COINS';
const ON_CHANGE_LOADING = 'ON_CHANGE_LOADING';

const initialState = {
  cData: [],
  coins: [],
  loadingData: false
};

export const loadDataFromCryptoAPI = (data) => dispatch => {
  dispatch(onChangeLoading(true));
  request({
    url: `/crypto/get?first=${data.first}&second=${data.second}&limit=${data.limit}`
  })
    .then(response => {
      if (response.data) {
        dispatch(onChangeLoading(false));
        dispatch(onChangeCryptoData(response.data));
      }
    }).catch(error => {
      dispatch(onChangeLoading(false));
      throw(error);
    })
};

export const loadCoins = () => dispatch => {
  request({
    url: `/crypto/getcoins`
  })
    .then(response => {
      if (response.data) {
        dispatch(onChangeCoins(response.data));
      }
    }).catch(error => {
    throw(error);
  })
};

export const onChangeCryptoData = payload => ({
  type: ON_CHANGE_CRYPTODATA,
  payload
});

const onChangeCoins = payload => ({
  type: ON_CHANGE_COINS,
  payload
});

const onChangeLoading = payload => ({
  type: ON_CHANGE_LOADING,
  payload
});

const cryptoDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_CRYPTODATA:
      return Object.assign({}, state, {
        cData: action.payload
      });
    case ON_CHANGE_COINS:
      return Object.assign({}, state, {
        coins: action.payload
      });
    case ON_CHANGE_LOADING:
      return Object.assign({}, state, {
        loadingData: action.payload
      });
    default:
      return state;
  }
};

export const cryptoSelector = (arr = []) => {
  return arr;
};

export default cryptoDataReducer;