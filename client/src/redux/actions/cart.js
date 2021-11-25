import { ADDING_TO_CART, REMOVE_FROM_CART, SORT_PRODUCT } from './types';

export function addToCart(product) {
  return {
    type: ADDING_TO_CART,
    payload: product
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  };
}

export const sortProduct = product => {
  return {
    type: SORT_PRODUCT,
    payload: product
  };
};
