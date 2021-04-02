import { fetchCartItems } from "../api/index";
import {
  LOAD_CART,
  CLEAR_CART,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
} from "../constant";

import { useSelector } from "react-redux";

const getCartItems = () => async (dispatch) => {
  try {
    const {
      data: { cart },
    } = await fetchCartItems();

    dispatch({ type: LOAD_CART, payload: cart });
  } catch (error) {
    console.log(error.message);
  }
};

const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};

const increaseHowMany = (id) => (dispatch) => {
  dispatch({ type: INCREASE_ITEM_COUNT, payload: id });
};

const decreaseHowMany = (id, cart) => (dispatch) => {
  const newCart = cart
    .filter((item) => {
      if (item.howMany === 1 && item.id === id) {
        return false;
      } else {
        return true;
      }
    })
    .map((item) => {
      if (item.id === id) {
        item.howMany--;
      }
      return item;
    });

  dispatch({ type: DECREASE_ITEM_COUNT, payload: newCart });
};

export { getCartItems, clearCart, increaseHowMany, decreaseHowMany };
