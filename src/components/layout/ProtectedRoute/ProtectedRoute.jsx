"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";


const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { session, loading } = useAuth();

  useEffect(() => {
    if (!loading && !session) {
      router.replace("/auth");
    }
  }, [session, loading, router]);

  if (loading || !session) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
