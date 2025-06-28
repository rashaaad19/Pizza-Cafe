import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../api/products";

export const useDeletteProduct = (product) => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: ({product}) => {

        console.log("Product deleted successfully");
        },
    }); 
}