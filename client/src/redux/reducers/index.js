import { combineReducers } from 'redux';
import productReducer from './products';
import cartReducer from './cart';
import detailReducer from './detail';

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  detailReducer
});

export default rootReducer;
