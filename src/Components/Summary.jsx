import React from "react";
import { useSelector } from "react-redux";
const Summary = () => {
  const shipCh = 200;
  const { loading, orderTotal } = useSelector((state) => state);

  return (
    <section className="summary">
      {loading ? (
        <h1 className="l">Loading...</h1>
      ) : (
        <>
          <h4>Summary</h4>
          <div className="details">
            <div className="order-total flex">
              <p>Order total</p>
              <span>&#8377;{orderTotal}</span>
            </div>
            <div className="shiping flex">
              <p>Shipping</p>
              <span>&#8377;{orderTotal === 0 ? `0` : shipCh}</span>
            </div>

            <div className="subtotal flex">
              <p>Subtotal</p>
              <span>&#8377;{orderTotal === 0 ? `0` : orderTotal + shipCh}</span>
            </div>
            <button>Checkout Items</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Summary;
