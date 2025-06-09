import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Phone", count: 0 },
    { id: 2, name: "Laptop", count: 0 },
    { id: 3, name: "PC", count: 0 },
  ]);

  const handleIncrement = (id) => {
    const newProducts = [...products];
    const productIndex = newProducts.findIndex((product) => product.id === id);
    let selectedProduct = newProducts[productIndex];

    // newProducts[productIndex] = {
    //   ...newProducts[productIndex],
    //   count: selectedProduct.count++,
    // };

    selectedProduct = {
      ...selectedProduct,
      count: selectedProduct.count++,
    };
    setProducts([...newProducts]);
  };

  const handleDecrement = (id) => {
    const newProducts = [...products];
    const productIndex = newProducts.findIndex((product) => product.id === id);
    let selectedProduct = newProducts[productIndex];
    if (selectedProduct.count === 0) {
      return;
    } else {
      selectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count--,
      };
      setProducts([...newProducts]);
    }
  };
  const handleReset = () => {
    setProducts(
      products.map((product) => ({ ...product, count:0 }))
    );
  };
  console.log(products);
  return (
    <div className="p-3 flex flex-col items-baseline gap-3">
      {products.map((product) => (
        <CartItem
          key={product.id}
          name={product.name}
          id={product.id}
          count={product.count}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleReset={handleReset}
        />
      ))}
      <button
        className="btn btn-warning"
        onClick={() => {
          handleReset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Cart;
