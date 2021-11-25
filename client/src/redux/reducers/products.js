import {
  RETRIEVE_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT_BYNAME,
  SORT_PRODUCT
} from '../actions/types';

const initialState = [];

function productReducer(products = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRODUCT:
      return [...products, payload];

    case RETRIEVE_PRODUCTS:
      return payload;

    case SORT_PRODUCT:
      if (payload === 'asc') {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        return sorted;
      } else {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        return sorted;
      }

    case UPDATE_PRODUCT:
      return products.map(product => {
        if (product.id === payload.id) {
          return {
            ...product,
            ...payload
          };
        } else {
          return product;
        }
      });

    case DELETE_PRODUCT:
      return products.filter(({ id }) => id !== payload.id);

    case SEARCH_PRODUCT_BYNAME:
      const searchItem = products.filter(product =>
        product.name.toLowerCase().startsWith(payload.toLowerCase())
      );
      return {
        ...products,
        searchItem
      };

    default:
      return products;
  }
}

export default productReducer;
