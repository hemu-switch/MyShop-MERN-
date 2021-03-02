import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productLisReducer } from './reducers/productReducer';

const reducer = combineReducers({
  productList: productLisReducer
});
const initializeState = {};

const Middleware = [thunk];

const store = createStore(
  reducer,
  initializeState,
  composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;
