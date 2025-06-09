import React from "react";

const CartItem = ({
  id,
  name,
  count,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div className="flex gap-5 items-center">
      <span>{name}</span>
      <span>{count}</span>
      <div className="flex gap-2">
        <button
          className="btn btn-accent"
          onClick={() => {
            handleIncrement(id);
          }}
        >
          +
        </button>
        <button
          className="btn btn-error"
          onClick={() => {
            handleDecrement(id);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
