import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { arrayFromNum } from "../utils/array";
import { ProductContext } from "../context/ProductContext";

const Home = ({}) => {
  //-----------------Context-----------------
  const {
    filteredProducts: products,
    categories,
    selectedCategory,
    currentPage,
    searchQuery,
    handleToggleCart,
    handleCategorySelect,
    handlePageChange,
    handleSearch,
  } = useContext(ProductContext);

  //-----------------States-----------------
  let filteredProducts =
    selectedCategory === 0
      ? products
      : products.filter((product) => product.cid === selectedCategory);
  console.log(filteredProducts);

  filteredProducts = filteredProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const numOfItems = filteredProducts.length;
  const pageSize = 6;
  const numOfPages = Math.ceil(numOfItems / pageSize);
  let start = (currentPage - 1) * pageSize;
  let end = start + pageSize;
  let arrPages = arrayFromNum(numOfPages);
  filteredProducts = filteredProducts.slice(start, end);

  return (
    <>
      <div className="grid grid-cols-6 py-8 px-4">
        <div className="sm: col-span-full md:col-span-1">
          <label className="input mb-8">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              onChange={(e) => handleSearch(e)}
            />
          </label>

          <div className=" flex justify-around md:flex-col ">
            {categories.map((item, index) => (
              <h2
                key={item.id}
                onClick={() => handleCategorySelect(item.id)}
                className={`p-5 capitalize border-b-2 cursor-pointer transition-colors duration-200 font-medium 
      ${index === 0 ? "border-t-2" : ""}
      ${
        selectedCategory === item.id
          ? "bg-orange-200 text-orange-900 border-orange-300"
          : "hover:bg-orange-50 hover:text-orange-700 text-gray-700 border-gray-200"
      }`}
              >
                {item.name}
              </h2>
            ))}
          </div>
        </div>

        <div className="mx-auto grid col-start-1 col-span-6 md:col-start-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
          {filteredProducts.map((product) => (
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
            key={page}
            className={`btn btn-square ${
              page === currentPage ? "bg-orange-200" : ""
            }`}
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
