"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "@/services/product.services";
import api from "@/lib/axios";

export const useProducts = (session) => {
  return useQuery({
    enabled: !!session,
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 0,
  });
};

const importProductFile = async (file) => {
  try {
    const formData = new FormData();

    formData.append("file", file);

    const { data } = await api.post("/products/import", formData);

    return data;
  } catch (error) {
    throw error;
  }
};

export const useImportProductFile = () => {
  return useMutation({
    mutationFn: importProductFile,
  });
};

const clearAllProducts = async (file) => {
  const { data } = await api.delete("/products");
  return data;
};

export const useClearAllProducts = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: clearAllProducts,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
};
