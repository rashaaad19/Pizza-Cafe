
const SkeltonCard = () => {
  return (
    <div className="card bg-base-100 w-full shadow-sm animate-pulse">
      {/* Image Placeholder */}
      <figure>
        <div className="h-[268px] w-full bg-gray-300 rounded"></div>
      </figure>

      {/* Body */}
      <div className="card-body">
        <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div> {/* title */}
        <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div> {/* price or count */}

        <div className="card-actions justify-end">
          <div className="h-6 w-6 bg-gray-300 rounded-full"></div> {/* button placeholder */}
        </div>
      </div>
    </div>
  );
};

export default SkeltonCard;
