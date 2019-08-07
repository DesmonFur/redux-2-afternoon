import {createStore,combineReducers,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './ducks/budgetReducer';
import userReducer from './ducks/userReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
  });
  

//   const enhancers = compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
