import ProtectedRoute from '@/components/layout/ProtectedRoute/ProtectedRoute'
import PoroductsListSaveLoading from '@/components/screens/ProductsBase/CreateProductsBase/PoroductsListSaveLoading/PoroductsListSaveLoading'
import React from 'react'

const ProductImportScreen = () => {
  return (
    <ProtectedRoute>
        <PoroductsListSaveLoading/>
    </ProtectedRoute>
  )
}

export default ProductImportScreen
