import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer';

let reduxStore = () => {
  const composeEnhancers =
    process.env.NODE_ENV === 'production' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));
};

export default reduxStore;
