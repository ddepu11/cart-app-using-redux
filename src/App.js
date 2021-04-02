import React from "react";
import "./app.css";
import Items from "./Components/Items";
import Summary from "./Components/Summary";
import { FaShoppingCart } from "react-icons/fa";

function App() {
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
        {/* {loading === false &&
        (cart.length === 0 ? (
          ""
        ) : (
          <button onClick={clearAll}>Clear All</button>
        ))} */}
      </footer>
    </div>
  );
}

export default App;
