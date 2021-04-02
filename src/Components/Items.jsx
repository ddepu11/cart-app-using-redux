import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseHowMany,
  decreaseHowMany,
  removeCartItem,
} from "../actions/item";

const Items = () => {
  const dispatch = useDispatch();
  const { cart, loading } = useSelector((state) => state);

  return (
    <aside className="items">
      {loading ? (
        <h1 className="l">Loading...</h1>
      ) : cart.length === 0 ? (
        <div className="msg">
          <h2>Your Cart is Empty!</h2>
          <p>Please Refresh the page!</p>
        </div>
      ) : (
        cart.map((item) => {
          const { id, title, imgSrc, price, howMany } = item;
          return (
            <div key={id} className="item">
              <img src={imgSrc} alt={title} />
              <h6>{title}</h6>

              <div className="buttons-div flex">
                <FaMinus
                  className="minus pointer"
                  onClick={() => {
                    dispatch(decreaseHowMany(id, cart));
                  }}
                />

                <span>{howMany}</span>

                <FaPlus
                  className="plus pointer"
                  onClick={() => {
                    dispatch(increaseHowMany(id));
                  }}
                />
              </div>
              <span>&#8377;{price}</span>
              <ImBin
                className="bin pointer"
                onClick={() => dispatch(removeCartItem(id, cart))}
              />
            </div>
          );
        })
      )}
    </aside>
  );
};

export default Items;
