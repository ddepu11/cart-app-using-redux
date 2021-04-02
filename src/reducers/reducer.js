import { SET_LOADING, LOAD_CART, CLEAR_CART } from "../constant";

const initialState = {
  cart: [],
  loading: false,
  orderTotal: 0,
  noOfItems: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
