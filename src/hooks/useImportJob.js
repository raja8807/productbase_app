"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { getProducts } from "@/services/product.services";
import api from "@/lib/axios";

const getActiveImportJob = async (file) => {
  const { data } = await api.get("/import_job/jobs/active");
  return data;
};

export const useActiveImportJobs = () => {
  return useQuery({
    queryKey: ["active-import-job"],
    queryFn: getActiveImportJob,
    retry: 0,
    refetchInterval: (query) => {
      return query.state.data?.active ? 5000 : false;
    },
  });
};
