import api from "@/lib/axios";

export const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const searchProducts = async (query) => {
  const { data } = await api.get(
    `/products/search?q=${query}&tenant_id=d5292d6e-d251-43ae-9379-9421b69f2517`,
  );
  return data;
};
