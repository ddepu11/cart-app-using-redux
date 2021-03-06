import { fetchCartItems } from "../api/index";
import {
  LOAD_CART,
  CLEAR_CART,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
  REMOVE_ITEM,
  COUNT_TOTAL,
} from "../constant";

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

const removeCartItem = (id, cart) => (dispatch) => {
  const newCart = cart.filter((item) => item.id !== id);
  dispatch({ type: REMOVE_ITEM, payload: newCart });
};

const getSummary = (cart) => (dispatch) => {
  const { noOfItems, orderTotal } = cart.reduce(
    (cartTotal, item) => {
      let totalItems = item.howMany;
      let orTotal = item.howMany * item.price;

      return {
        noOfItems: totalItems + cartTotal.noOfItems,
        orderTotal: orTotal + cartTotal.orderTotal,
      };
    },
    {
      noOfItems: 0,
      orderTotal: 0,
    }
  );
  console.log({ noOfItems, orderTotal });

  dispatch({ type: COUNT_TOTAL, payload: { noOfItems, orderTotal } });
};

export {
  getCartItems,
  clearCart,
  increaseHowMany,
  decreaseHowMany,
  removeCartItem,
  getSummary,
};
