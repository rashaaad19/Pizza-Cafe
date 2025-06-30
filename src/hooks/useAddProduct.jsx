import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../api/products";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
export const useAddProduct = () => {
  const queryClient = useQueryClient();
  const navigate= useNavigate();


  return useMutation({
    mutationFn: addProduct,
    onSuccess: ({product}) => {
      console.log("Product added successfully",product);
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate('/dashboard')
      toast.success('Product added')
    },
  });
};
