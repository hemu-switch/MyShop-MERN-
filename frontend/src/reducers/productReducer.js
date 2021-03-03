/* eslint-disable default-case */
// Reducers takes two arguments Initial State and action
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  SINGLE_PRODUCT_LIST_REQUEST,
  SINGLE_PRODUCT_LIST_SUCCESS,
  SINGLE_PRODUCT_LIST_FAILURE
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ProductDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case SINGLE_PRODUCT_LIST_REQUEST:
      return { loading: true, product: { reviews: [] } };
    case SINGLE_PRODUCT_LIST_SUCCESS:
      return { loading: false, product: action.payload };
    case SINGLE_PRODUCT_LIST_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
