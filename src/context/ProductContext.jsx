import { createContext, useEffect, useState } from "react";
import { useProductsQuery } from "../hooks/useFetchProducts";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //-----------------States-----------------

  const { data, isLoading, error } = useProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    { id: 0, name: "all" },
    { id: 1, name: "pizza" },
    { id: 2, name: "salads" },
    { id: 3, name: "drinks" },
  ];

  useEffect(() => {
    if (data) {
      setFilteredProducts(data);
    }
  }, [data]);

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
        isLoading,
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
