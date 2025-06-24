import { createContext, useState } from "react";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //-----------------States-----------------
  const [filteredProducts, setFilteredProducts] = useState([
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
      img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 6.99,
      cid: 2,
    },
    {
      id: 8,
      name: "Greek Salad",
      count: 0,
      img: "https://images.unsplash.com/photo-1606735584785-1848fdcaea57?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 7.49,
      cid: 2,
    },
    {
      id: 9,
      name: "Cobb Salad",
      count: 0,
      img: "https://images.unsplash.com/photo-1605291535557-4fc6bb3b4d00?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 8.29,
      cid: 2,
    },
    {
      id: 10,
      name: "Garden Salad",
      count: 0,
      img: "https://images.unsplash.com/photo-1605291535126-2d71fea483c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 5.99,
      cid: 2,
    },
    {
      id: 11,
      name: "Quinoa Salad",
      count: 0,
      img: "https://plus.unsplash.com/premium_photo-1705207702013-368450377046?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 7.99,
      cid: 2,
    },
    {
      id: 12,
      name: "Pasta Salad",
      count: 0,
      img: "https://plus.unsplash.com/premium_photo-1705420671923-cc9270c18b34?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 6.49,
      cid: 2,
    },
    // 🥤 Drinks
    {
      id: 13,
      name: "Coca-Cola",
      count: 0,
      img: "https://plus.unsplash.com/premium_photo-1725075086083-89117890371d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2.49,
      cid: 3,
    },
    {
      id: 14,
      name: "Orange Juice",
      count: 0,
      img: "https://images.unsplash.com/photo-1641659735894-45046caad624?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3.29,
      cid: 3,
    },
    {
      id: 15,
      name: "Lemonade",
      count: 0,
      img: "https://images.unsplash.com/photo-1656936632096-59fcacae533f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2.99,
      cid: 3,
    },
    {
      id: 16,
      name: "Iced Tea",
      count: 0,
      img: "https://images.unsplash.com/photo-1499961024600-ad094db305cc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2.89,
      cid: 3,
    },
    {
      id: 17,
      name: "Mineral Water",
      count: 0,
      img: "https://images.unsplash.com/photo-1554140426-5e830b73a5e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1.99,
      cid: 3,
    },
    {
      id: 18,
      name: "Coffee",
      count: 0,
      img: "https://plus.unsplash.com/premium_photo-1670015230537-5c6253727a36?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2.59,
      cid: 3,
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    { id: 0, name: "all" },
    { id: 1, name: "pizza" },
    { id: 2, name: "salads" },
    { id: 3, name: "drinks" },
  ];

  //-------------------------------- Handlers ---------------------------
  const handleIncrement = (id) => {
    const newProducts = [...filteredProducts];
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
    setFilteredProducts([...newProducts]);
  };

  const handleDecrement = (id) => {
    const newProducts = [...filteredProducts];
    const productIndex = newProducts.findIndex((product) => product.id === id);
    let selectedProduct = newProducts[productIndex];
    if (selectedProduct.count === 0) {
      return;
    } else {
      selectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count--,
      };
      setFilteredProducts([...newProducts]);
    }
  };
  const handleReset = () => {
    setProducts(products.map((product) => ({ ...product, count: 0 })));
  };

  const handleRemove = (id) => {
    const updatedProducts = filteredProducts.map((product) =>
      product.id === id ? { ...product, count: 0 } : product
    );
    setFilteredProducts(updatedProducts);
  };

  const handleToggleCart = (id) => {
    const updatedProducts = filteredProducts.map((product) => {
      return product.count === 0
        ? product.id === id
          ? { ...product, count: 1 }
          : product
        : product.id === id
        ? { ...product, count: 0 }
        : product;
    });
    setFilteredProducts(updatedProducts);
  };

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setCurrentPage(1);
    setSearchQuery(event.target.value);
  };

  return (
    <ProductContext
      value={{
        filteredProducts,
        currentPage,
        selectedCategory,
        searchQuery,
        categories,
        handleIncrement,
        handleDecrement,
        handleReset,
        handleRemove,
        handleToggleCart,
        handleCategorySelect,
        handlePageChange,
        handleSearch,
      }}
    >
      {children}
    </ProductContext>
  );
};

export default ProductProvider;
