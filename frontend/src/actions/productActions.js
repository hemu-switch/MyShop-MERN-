import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  SINGLE_PRODUCT_LIST_REQUEST,
  SINGLE_PRODUCT_LIST_SUCCESS,
  SINGLE_PRODUCT_LIST_FAILURE
} from '../constants/productConstants.js';
import axios from 'axios';

export const listProducts = () => async dispatch => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST
    });

    const { data } = await axios.get('/api/products');

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const singleProductList = id => async dispatch => {
  try {
    dispatch({
      type: SINGLE_PRODUCT_LIST_REQUEST
    });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: SINGLE_PRODUCT_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SINGLE_PRODUCT_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
