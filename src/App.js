import React, { useEffect } from "react";
import "./app.css";
import Items from "./Components/Items";
import Summary from "./Components/Summary";
import { FaShoppingCart } from "react-icons/fa";
import { clearCart, getCartItems } from "./actions/item";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const { cart, loading, noOfItems } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div className="container grid">
      <header className="header flex">
        <h3>
          Home/<span>Cart</span>
        </h3>

        <div className="h-right flex">
          <FaShoppingCart className="s-cart" />
          <span>{noOfItems}</span>
        </div>
      </header>

      <Items />

      <Summary />

      <footer className="footer flex">
        {loading === false &&
          (cart.length === 0 ? (
            ""
          ) : (
            <button onClick={() => dispatch(clearCart())}>Clear All</button>
          ))}
      </footer>
    </div>
  );
}

export default App;
