import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../api/products";
import { toast } from "react-toastify";

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: (product)=>deleteProduct(product),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            console.log('Deleted')
            toast.error('Product deleted')

        console.log("Product deleted successfully");
        },
    }); 
}