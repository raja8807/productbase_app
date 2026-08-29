"use client";

import AuthScreen from "@/components/screens/Auth/Auth";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthPage = () => {
  const router = useRouter();

  const { session } = useAuth();

  useEffect(() => {
    if (session) {
      router.push("/productbase");
    }
  }, [router, session]);

  if (session) {
    return null;
  }

  return <AuthScreen />;
};

export default AuthPage;
