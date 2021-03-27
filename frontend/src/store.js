import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  ProductDetailsReducer
} from './reducers/productReducer';

import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
  productList: productListReducer,
  ProductDetails: ProductDetailsReducer,
  cart: cartReducer
});

const cartItemsFromStore = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initializeState = {
  cart: { cartItems: cartItemsFromStore }
};

const Middleware = [thunk];

const store = createStore(
  reducer,
  initializeState,
  composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;
