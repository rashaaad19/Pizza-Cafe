import { Formik } from "formik";
import React from "react";
import { useFetchOneProduct } from "../hooks/useFetchOneProduct";
import { useNavigate, useParams } from "react-router";
import ItemForm from "./ItemForm";
import { editItemHandler } from "../handlers/formHandlers";
import { useEditProduct } from "../hooks/useEditProduct";

const EditItemForm = () => {
  //----------------------Sates-------------------
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useFetchOneProduct(id);
  const { mutateAsync } = useEditProduct(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <Formik
      initialValues={{
        name: data.name,
        price: data.price,
        img: data.img,
        cid: data.cid,
        count: data.count,
      }}
      enableReinitialize
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Form submitted with values:", values);
        //ensure that price and count are numbers
        const validData = {
          ...values,
          price: Number(values.price),
          cid: Number(values.cid),
        };
        editItemHandler(validData, {
          setSubmitting,
          resetForm,
          mutateAsync,
          navigate,
          id,
        });
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <ItemForm type="Edit Item" isSubmitting={isSubmitting} />
      )}
    </Formik>
  );
};

export default EditItemForm;
