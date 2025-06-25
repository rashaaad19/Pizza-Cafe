const AddItemForm = () => {
  const handleSubmit = (event) => { 
    console.log(event)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center h-fit  mt-10 gap-5 px-4 py-8 bg-gray-50 rounded-lg shadow-md md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/3 mx-auto"
    >
      <input
        type="text"
        placeholder="Enter item name"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        pattern="^[0-9]+(\.[0-9]{1,2})?$"
        title="Please enter a valid price (e.g., 10.99)"
        placeholder="Enter item price"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="url"
        placeholder="Enter item image URL"
        className="input input-bordered w-full max-w-xs"
      />

      <select defaultValue="pizza" className="select" required>
        <option value={"pizza"}>Pizza</option>
        <option value={"salad"}>Salad</option>
        <option value={"drinks"}>Drinks</option>
      </select>

      <button type="submit" className="btn btn-success">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
