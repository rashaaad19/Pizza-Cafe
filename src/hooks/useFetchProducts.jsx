import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
