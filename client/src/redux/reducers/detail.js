import { RETRIEVE_PRODUCT } from '../actions/types';

const initialState = [];
const detailReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case RETRIEVE_PRODUCT:
      return payload;

    default:
      return state;
  }
};
export default detailReducer;
