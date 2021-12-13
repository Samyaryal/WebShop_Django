import {
  RETRIEVE_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  RETRIEVE_PRODUCT
} from './types';
import ProductService from '../../services/services';

export const retrieveProducts = () => async dispatch => {
  try {
    const res = await ProductService.getAll();

    dispatch({
      type: RETRIEVE_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const retriveProduct = id => async dispatch => {
  try {
    const res = await ProductService.getProduct(id);
    console.log('res  ', res);
    dispatch({
      type: RETRIEVE_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = (
  name,
  image,
  price,
  productCode,
  description
) => async dispatch => {
  try {
    const res = await ProductService.create({
      name,
      image,
      price,
      productCode,
      description
    });
    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = (id, data) => async dispatch => {
  try {
    const res = await ProductService.update(id, data);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: data
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = id => async dispatch => {
  try {
    await ProductService.remove(id);
    dispatch({
      type: DELETE_PRODUCT,
      payload: { id }
    });
  } catch (err) {
    console.log(err);
  }
};

export const findProductByName = name => async dispatch => {
  try {
    const res = await ProductService.findByName(name);
    dispatch({
      type: RETRIEVE_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const findProductById = productCode => async dispatch => {
  try {
    const res = await ProductService.findByCode(productCode);
    dispatch({
      type: RETRIEVE_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
