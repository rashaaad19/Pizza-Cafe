import { Formik } from "formik";
import { addItemSchema } from "../schemas/ItemSchemas";
import { addItemHandler } from "../handlers/formHandlers";
import { useAddProduct } from "../hooks/useAddProduct";
import { useNavigate } from "react-router";
import ItemForm from "./ItemForm";

const AddItemForm = () => {
  const { mutateAsync, isError, isPending, isSuccess } = useAddProduct();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        name: "",
        price: "",
        img: "",
        cid: 1,
        count: 0,
      }}
      validationSchema={addItemSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        addItemHandler(values, {
          setSubmitting,
          resetForm,
          mutateAsync,
          navigate,
        });
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
<ItemForm isSubmitting={isSubmitting} type={'Add Item'}/>      )}
    </Formik>
  );
};

export default AddItemForm;
