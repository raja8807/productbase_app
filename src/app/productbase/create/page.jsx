import ProtectedRoute from "@/components/layout/ProtectedRoute/ProtectedRoute";
import CreateProductsBaseScreen from "@/components/screens/ProductsBase/CreateProductsBase/CreateProductsBase";
import React from "react";

const CreateProductBasePage = () => {
  return (
    <ProtectedRoute>
      <CreateProductsBaseScreen />
    </ProtectedRoute>
  );
};

export default CreateProductBasePage;
