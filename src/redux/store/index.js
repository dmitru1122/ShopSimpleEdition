import { createStore} from 'redux';
import allReducer from '../reducer/index';
// import * as actionsType from '../actions/actionsType';
// import logger from 'redux-logger';

const myLogger = (state) => (next) => (action) => {
  console.log(action);
  next(action);
};

const store = createStore(
    allReducer, 
    {},
    // applyMiddleware( logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(),
  );

export default store;