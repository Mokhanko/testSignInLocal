import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import authReducer from './authReducer'
import cryptoDataReducer from './cryptoReducer'
import btcReducer from './btcReducer'


export default combineReducers({
  products: productsReducer,
  users: authReducer,
  cryptoData: cryptoDataReducer,
  btc: btcReducer
});

