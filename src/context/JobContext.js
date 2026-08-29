"use client";

import { useActiveImportJobs } from "@/hooks/useImportJob";
import { useRouter, usePathname } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [activeJob, setActiveJob] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  const { data, isLoading } = useActiveImportJobs();

  useEffect(() => {
    if (!data?.active) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveJob(null);
      return;
    }

    setActiveJob(data.job);

    if (pathname !== "/productbase/create/import") {
      router.push("/productbase/create/import");
    }
  }, [data, router, pathname]);

  const value = useMemo(
    () => ({
      activeJob,
      setActiveJob,
    }),
    [activeJob],
  );

  if (isLoading) {
    return <p>jobs loading..</p>;
  }

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export const useJob = () => {
  return useContext(JobContext);
};
