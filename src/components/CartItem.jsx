import React from "react";
import ProductCard from "./ProductCard";

const CartItem = ({
  id,
  name,
  image,
  count,
  handleIncrement,
  handleDecrement,
  handleRemove,
}) => {
  return (
    <div>
      <ProductCard
        title={name}
        image={image}
        count={count}
        id={id}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default CartItem;
