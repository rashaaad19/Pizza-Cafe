import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Neapolitan",
      count: 0,
      img: "public/images/neapolitan-pizza.jpg",
    },
    {
      id: 2,
      name: "Pepperoni",
      count: 0,
      img: "public/images/pepperoni-pizza.jpg",
    },
    { id: 3, name: "Ranch", count: 0, img: "public/images/ranch-pizza.jpg" },
    {
      id: 4,
      name: "Seafood",
      count: 0,
      img: "public/images/seafood-pizza.jpg",
    },
    { id: 5, name: "Vegan", count: 0, img: "public/images/vegan-pizza.jpg" },
    {
      id: 6,
      name: "Beef",
      count: 0,
      img: "public/images/beef-pizza.jpg",
    },
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
    setProducts(products.map((product) => ({ ...product, count: 0 })));
  };

  const handleRemove = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };
  return (
    <>
      <Navbar products={products} />
      <Cart
        products={products}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
        handleRemove={handleRemove}
      />
    </>
  );
}

export default App;
