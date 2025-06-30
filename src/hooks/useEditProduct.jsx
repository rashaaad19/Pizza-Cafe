import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct } from "../api/products";
import { useNavigate } from "react-router";

export const useEditProduct = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();


  return useMutation({
    mutationFn: (product) => editProduct(id, product),
    onSuccess: () => {
      console.log("Product edited successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate('/dashboard');
      // toast.success('Product editedd')

    },
    onError: (error) => {
      console.error("Error editing product:", error);
    },
  });
};
