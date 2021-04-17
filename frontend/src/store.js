import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  ProductDetailsReducer
} from './reducers/productReducer';

import { cartReducer } from './reducers/cartReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducer = combineReducers({
  productList: productListReducer,
  ProductDetails: ProductDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
});

const cartItemsFromStore = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStore = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initializeState = {
  cart: { cartItems: cartItemsFromStore },
  userLogin: { userInfo: userInfoFromStore }
};

const Middleware = [thunk];

const store = createStore(
  reducer,
  initializeState,
  composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;
