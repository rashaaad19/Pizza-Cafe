import React from "react";
import ProductCard from "../components/ProductCard";

const Home = ({
  products,
  handleToggleCart,
  categories,
  handleCategorySelect,
}) => {
  return (
    <div className="grid grid-cols-6 py-8">
      <div>
        {categories.map((item) => (
          <h2
            key={item.id}
            onClick={() => handleCategorySelect(item.id)}
            className="p-5 capitalize  border-b-2 cursor-pointer"
          >
            {" "}
            {item.name}
          </h2>
        ))}
      </div>
      <div className="mx-auto grid col-span-5  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
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
  );
};

export default Home;
