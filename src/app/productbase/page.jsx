import ProtectedRoute from "@/components/layout/ProtectedRoute/ProtectedRoute";
import ProductsBaseScreen from "@/components/screens/ProductsBase/ProductsBase";

export default function ProductsBasePage() {
  return (
    <ProtectedRoute>
      <ProductsBaseScreen />
    </ProtectedRoute>
  );
}
