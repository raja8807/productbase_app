import { searchProducts } from "@/services/product.services";
import { useMutation } from "@tanstack/react-query";

export const useSearchProducts = () => {
  return useMutation({
    mutationFn: searchProducts,
  });
};
