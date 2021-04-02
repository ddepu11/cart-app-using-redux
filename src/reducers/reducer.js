import {
  SET_LOADING,
  LOAD_CART,
  CLEAR_CART,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
  REMOVE_ITEM,
  COUNT_TOTAL,
} from "../constant";

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

    case INCREASE_ITEM_COUNT:
      let newCart = state.cart.map((item) => {
        if (action.payload === item.id) {
          item.howMany++;
        }

        return item;
      });
      return {
        ...state,
        cart: newCart,
      };

    case DECREASE_ITEM_COUNT:
      return {
        ...state,
        cart: action.payload,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: action.payload,
      };
    case COUNT_TOTAL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
