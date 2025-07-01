const ProductCard = ({
  title,
  id,
  image,
  count,
  cardType,
  handleIncrement,
  handleDecrement,
  handleRemove,
  price,
  handleToggleCart,
}) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
<figure className="h-[268px]">
  <img
    src={image}
    alt={title}
    loading="lazy"
  />
</figure>
      <div className="card-body">
        <h2 className="card-title text-orange-600 text-lg">{title}</h2>
        <p className="text-base font-bold text-neutral-500">
          {cardType === "menu" ? `${price}$` : count}
        </p>
        {cardType === "menu" ? (
          <div className="card-actions justify-end">
            <button
              className="cursor-pointer"
              onClick={() => handleToggleCart(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={count>0?'oklch(75% 0.183 55.934)':'none'}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={count>0?'oklch(70.5% 0.213 47.604)':'black'}
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="card-actions justify-between items-center">
            <button
              className="btn btn-square"
              onClick={() => {
                handleRemove(id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              <button
                className="btn btn-square "
                onClick={() => {
                  handleIncrement(id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <button
                className="btn btn-square"
                onClick={() => {
                  handleDecrement(id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5 text-red-500 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default ProductCard;

<div className=" justify-start"></div>;
