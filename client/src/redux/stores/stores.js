import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const toStorage = state => {
  try {
    const toSave = JSON.stringify(state);
    localStorage.setItem('key', toSave);
  } catch (error) {
    console.log(error);
  }
};

const fromStorage = () => {
  try {
    const savedItem = localStorage.getItem('key');
    if (savedItem === null) return [];
    return JSON.parse(savedItem);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const initialState = {
  productReducer: [],
  cartReducer: {
    cartItems: fromStorage()
  },
  detailReducer: []
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => toStorage(store.getState().cartReducer.cartItems));
export default store;
