"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LandingPage from "@/components/screens/LandingPage/LandingPage";

export default function HomePage() {
  const router = useRouter();
  const { session } = useAuth();

  // useEffect(() => {
  //   if (session) {
  //     router.replace("/productbase");
  //   } else {
  //     router.replace("/auth");
  //   }
  // }, [router]);

  return <LandingPage />;
}
