import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import todoApp from '../reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose;

const store = createStore(todoApp,composeEnhancers(applyMiddleware(thunk)));

export default store;