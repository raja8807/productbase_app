import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getApiKeys = async (file) => {
  const { data } = await api.get("/api-key");
  return data;
};

export const useGetApiKeys = () => {
  return useQuery({
    queryKey: ["API-Keys"],
    queryFn: getApiKeys,
    retry: 0,
  });
};

const createApiKey = async (payload) => {
  const { data } = await api.post("/api-key", payload);
  return data;
};

export const useCreateApiKey = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createApiKey,

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["API-Keys"],
      });
    },
  });
};

const deleteApiKey = async (api_key_id) => {
  const { data } = await api.delete(`/api-key/${api_key_id}`);
  return data;
};

export const useDeleteApiKey = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteApiKey,

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["API-Keys"],
      });
    },
  });
};
