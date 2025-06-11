import CartItem from "../components/CartItem";

const Cart = ({
  products,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleRemove,
}) => {
 const inCartProducts = products.filter(product=>product.count>0);

  return (
    <>
      {inCartProducts.length === 0 ? (
        <div className="flex justify-center items-center h-screen mt-8">
          <h2 className="text-xl font-bold text-gray-900">
            You don't have products.
          </h2>
        </div>
      ) : (
        <div>
          <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
            {products.map(
              (product) =>
                product.count > 0 && (
                  <CartItem
                    key={product.id}
                    name={product.name}
                    image={product.img}
                    id={product.id}
                    cardType="cart"
                    count={product.count}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    handleReset={handleReset}
                    handleRemove={handleRemove}
                  />
                )
            )}
          </div>
          <div className="flex justify-end mx-5 my-2">
            <button
              className="btn btn-warning"
              onClick={() => {
                handleReset();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
