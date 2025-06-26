import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";
import { Form } from "formik";

const ItemForm = ({type, isSubmitting}) => {
  return (
    <Form
    className="flex flex-col items-center h-fit mt-10 gap-2 px-4 py-8
 bg-gray-50 rounded-lg shadow-md sm:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/3 mx-auto"
  >
    <MyTextInput
      label="Item name"
      name="name"
      type="text"
      placeholder="Enter item name"
      className="input input-bordered w-full max-w-xs"
    />
    <MyTextInput
      label="Item price"
      name="price"
      type="number"
      placeholder="Enter item price"
      className="input input-bordered w-full max-w-xs"
    />
    <MyTextInput
      label="Item image URL"
      name="img"
      type="text"
      placeholder="Enter item image URL"
      className="input input-bordered w-full max-w-xs"
    />
    <MySelect
      label="Category"
      name="cid"
      className="select select-bordered w-full max-w-xs"
    >
      <option value="1">Pizza</option>
      <option value="2">Salads</option>
      <option value="3">Drinks</option>
    </MySelect>
    <button
      disabled={isSubmitting}
      type="submit"
      className="btn btn-warning mt-6"
    >
      {type}
    </button>
  </Form>  )
}

export default ItemForm