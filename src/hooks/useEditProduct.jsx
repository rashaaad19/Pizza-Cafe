import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct } from "../api/products";

export const useEditProduct = (id) => {
    const queryClient = useQueryClient
    ();

  return useMutation({
    mutationFn: (product) => editProduct(id, product),
    onSuccess: () => {
      console.log("Product edited successfully");
        queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Error editing product:", error);
    },
  });
};
