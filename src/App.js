import React, { useEffect } from "react";
import "./app.css";
import Items from "./Components/Items";
import Summary from "./Components/Summary";
import { FaShoppingCart } from "react-icons/fa";
import { getCartItems } from "./actions/item";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <div className="container grid">
      <header className="header flex">
        <h3>
          Home/<span>Cart</span>
        </h3>

        <div className="h-right flex">
          <FaShoppingCart className="s-cart" />
          <span>21</span>
        </div>
      </header>

      <Items />

      <Summary />

      <footer className="footer flex">
        {loading === false &&
          (cart.length === 0 ? (
            ""
          ) : (
            // onClick={clearAll}
            <button>Clear All</button>
          ))}
      </footer>
    </div>
  );
}

export default App;
