import ProtectedRoute from "@/components/layout/ProtectedRoute/ProtectedRoute";
import APIScreen from "@/components/screens/API/API";
import React from "react";

const APIPasge = () => {
  return (
    <ProtectedRoute>
      <APIScreen />
    </ProtectedRoute>
  );
};

export default APIPasge;
