import { useState } from "react";
import "./App.css";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import People from "./pages/People";
import Company from "./pages/Company";
import Home from "./pages/Home";

function App() {
  //-------------------------------- States ---------------------------
  const [products, setProducts] = useState([
    // 🍕 Pizza
    {
      id: 1,
      name: "Neapolitan",
      count: 0,
      img: "public/images/neapolitan-pizza.jpg",
      price: 10.99,
      cid: 1,
    },
    {
      id: 2,
      name: "Pepperoni",
      count: 0,
      img: "public/images/pepperoni-pizza.jpg",
      price: 12.49,
      cid: 1,
    },
    {
      id: 3,
      name: "Ranch",
      count: 0,
      img: "public/images/ranch-pizza.jpg",
      price: 11.29,
      cid: 1,
    },
    {
      id: 4,
      name: "Seafood",
      count: 0,
      img: "public/images/seafood-pizza.jpg",
      price: 13.99,
      cid: 1,
    },
    {
      id: 5,
      name: "Vegan",
      count: 0,
      img: "public/images/vegan-pizza.jpg",
      price: 9.99,
      cid: 1,
    },
    {
      id: 6,
      name: "Beef",
      count: 0,
      img: "public/images/beef-pizza.jpg",
      price: 12.75,
      cid: 1,
    },

    // 🥗 Salads
    {
      id: 7,
      name: "Caesar Salad",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 6.99,
      cid: 2,
    },
    {
      id: 8,
      name: "Greek Salad",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 7.49,
      cid: 2,
    },
    {
      id: 9,
      name: "Cobb Salad",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 8.29,
      cid: 2,
    },
    {
      id: 10,
      name: "Garden Salad",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 5.99,
      cid: 2,
    },
    {
      id: 11,
      name: "Quinoa Salad",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 7.99,
      cid: 2,
    },
    {
      id: 12,
      name: "Pasta Salad",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 6.49,
      cid: 2,
    },

    // 🥤 Drinks
    {
      id: 13,
      name: "Coca-Cola",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 2.49,
      cid: 3,
    },
    {
      id: 14,
      name: "Orange Juice",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 3.29,
      cid: 3,
    },
    {
      id: 15,
      name: "Lemonade",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 2.99,
      cid: 3,
    },
    {
      id: 16,
      name: "Iced Tea",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 2.89,
      cid: 3,
    },
    {
      id: 17,
      name: "Mineral Water",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 1.99,
      cid: 3,
    },
    {
      id: 18,
      name: "Coffee",
      count: 0,
      img: "public/images/placeholder.jpg",
      price: 2.59,
      cid: 3,
    },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = [
    { id: 0, name: "all" },
    { id: 1, name: "pizza" },
    { id: 2, name: "salads" },
    { id: 3, name: "drinks" },
  ];

  //-------------------------------- Handlers ---------------------------
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
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, count: 0 } : product
    );
    setProducts(updatedProducts);
  };

  const handleToggleCart = (id) => {
    const updatedProducts = products.map((product) => {
      return product.count === 0
        ? product.id === id
          ? { ...product, count: 1 }
          : product
        : product.id === id
        ? { ...product, count: 0 }
        : product;
    });
    setProducts(updatedProducts);

    if (filteredProducts.length > 0) {
      const updatedFilteredProducts = filteredProducts.map((product) => {
        return product.count === 0
          ? product.id === id
            ? { ...product, count: 1 }
            : product
          : product.id === id
          ? { ...product, count: 0 }
          : product;
      });
      setFilteredProducts(updatedFilteredProducts);
    }
  };

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    id === 0
      ? setFilteredProducts([])
      : setFilteredProducts(products.filter((product) => product.cid === id));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar products={products} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={
                filteredProducts.length > 0 ? filteredProducts : products
              }
              handleToggleCart={handleToggleCart}
              handleCategorySelect={handleCategorySelect}
              selectedCategory={selectedCategory}
              categories={categories}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              products={products}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleReset={handleReset}
              handleRemove={handleRemove}
            />
          }
        />
        <Route path="/about" element={<About />}>
          <Route path="people" element={<People />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
