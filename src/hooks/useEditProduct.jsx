import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct } from "../api/products";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';

export const useEditProduct = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();


  return useMutation({
    mutationFn: (product) => editProduct(id, product),
    onSuccess: ({product}) => {
      console.log("Product edited successfully",product);
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate('/dashboard');
      toast.warn('Product Edited')

    },
    onError: (error) => {
      console.error("Error editing product:", error);
    },
  });
};
