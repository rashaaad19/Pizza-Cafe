import { useQuery } from "@tanstack/react-query"
import { fetchOneProduct } from "../api/products"

export const useFetchOneProduct = (id) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchOneProduct(id),
    })
}