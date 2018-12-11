import request from '../services/axiosMethods'

const initialState = {
  btcData: []
};

const ON_CHANGE_BTC = 'ON_CHANGE_BTC';

export const loadBtc = () => dispatch => {
  request({ url: '/btc/get'})
    .then(response => {
      if (response.data) {
        dispatch(onChangeBtc(response.data))
      }
    })
    .catch(error => {
    })
};

const onChangeBtc = payload => ({
  type: ON_CHANGE_BTC,
  payload
});

const btcReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_BTC:
      return Object.assign({}, state, {
        btcData: action.payload
      });
    default:
      return state;
  }
};

export default btcReducer;