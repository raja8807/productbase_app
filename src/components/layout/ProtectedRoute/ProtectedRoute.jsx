"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingScreen from "@/components/common/LoadingScreen/LoadingScreen";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { session, loading } = useAuth();

  useEffect(() => {
    if (!loading && !session) {
      router.replace("/auth");
    }
  }, [session, loading, router]);

  if (loading || !session) {
    return <LoadingScreen />;
  }

  return children;
};

export default ProtectedRoute;
