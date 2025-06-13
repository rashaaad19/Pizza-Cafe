import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { arrayFromNum } from "../utils/array";

const Home = ({
  products,
  handleToggleCart,
  categories,
  handleCategorySelect,
  selectedCategory,
  handlePageChange,
  currentPage,
}) => {
  
  let filteredProducts =
    selectedCategory === 0
      ? products
      : products.filter((product) => product.cid === selectedCategory);

  const numOfItems = filteredProducts.length;
  const pageSize = 6;
  const numOfPages = Math.ceil(numOfItems / pageSize);
  let start = (currentPage - 1) * pageSize;
  let end = start + pageSize;
  let arrPages = arrayFromNum(numOfPages);
  let paginatedProducts = filteredProducts.slice(start, end);

  return (
    <>
      <div className="grid grid-cols-6 py-8">
        <div>
          {categories.map((item) => (
            <h2
              key={item.id}
              onClick={() => handleCategorySelect(item.id)}
              className={
                "p-5 capitalize border-b-2 cursor-pointer " +
                (selectedCategory === item.id ? "bg-gray-300" : "")
              }
            >
              {item.name}
            </h2>
          ))}
        </div>
        <div className="mx-auto grid col-span-5  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
          {paginatedProducts.map((product) => (
            <ProductCard
              title={product.name}
              id={product.id}
              price={product.price}
              image={product.img}
              key={product.id}
              count={product.count}
              handleToggleCart={handleToggleCart}
              cardType="menu"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end mb-5 px-5 gap-2">
        {arrPages.map((page) => (
          <button
            className="btn btn-square"
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default Home;
