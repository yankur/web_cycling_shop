import {ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, ADD_QUANTITY, EMPTY_CART} from './actionTypes';

export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};
export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
