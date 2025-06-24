import React, { useContext } from "react";
import { NavLink } from "react-router";
import { ProductContext } from "../context/ProductContext";

const Navbar = () => {
  const { filteredProducts: products } = useContext(ProductContext);
  const itemsInCart = products.filter((product) => product.count > 0);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <NavLink className="btn btn-ghost text-xl" to={"/"}>
          Pizza Café
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <div className="relative">
              <NavLink to={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </NavLink>
              <div
                className="absolute w-5 h-5 bg-amber-300 top-1 right-1 rounded-full flex justify-center
              items-center"
              >
                <p className="text-sm font-bold"> {itemsInCart.length} </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
