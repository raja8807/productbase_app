"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProfile, signOut } from "@/services/auth.service";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,

    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["products"],
      });

      queryClient.removeQueries({
        queryKey: ["profile"],
      });

      queryClient.removeQueries({
        queryKey: ["active-import-job"],
      });
    },
  });
};
