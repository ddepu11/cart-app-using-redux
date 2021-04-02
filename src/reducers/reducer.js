import { SET_LOADING, LOAD_CART } from "../constant";

const initialState = {
  cart: [],
  loading: false,
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
    default:
      return state;
  }
};

export default reducer;
