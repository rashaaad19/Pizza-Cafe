import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../api/products";
export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      console.log("Product added successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
