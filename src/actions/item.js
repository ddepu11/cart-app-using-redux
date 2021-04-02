import { fetchCartItems } from "../api/index";
import { LOAD_CART, CLEAR_CART } from "../constant";

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
export { getCartItems, clearCart };
