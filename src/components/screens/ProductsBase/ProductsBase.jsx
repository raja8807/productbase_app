"use client";

import React, { useState } from "react";
import styles from "./ProductsBase.module.scss";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import PageHead from "@/components/ui/PageHead/PageHead";
import DataTable from "@/components/ui/DataTable/DataTable";
import { Eye, LayoutDashboard, Plus, Search, X } from "lucide-react";

import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Image } from "react-bootstrap";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import { apiRequest } from "@/services/api.services";
import { useProfile } from "@/hooks/useAuth";
import { useClearAllProducts, useProducts } from "@/hooks/useProducts";
import { useSearchProducts } from "@/hooks/useSearch";
import ProductTableSkeleton from "@/components/common/ProductTableSkeleton/ProductTableSkeleton";
import { useAuth } from "@/context/AuthContext";
import ProductModal from "./ProductModal/ProductModal";

export default function ProductsBaseScreen() {
  const { session } = useAuth();
  const [showProduct,setShowProduct] = useState(null)

  const columns = [
    {
      headerName: "Name",
      field: "name",
      minWidth: 200,
    },
    {
      headerName: "Description",
      field: "description",
      minWidth: 300,
    },
    {
      headerName: "Category",
      field: "category",
    },
    {
      headerName: "Brand",
      field: "brand",
    },
    {
      headerName: "Price",
      field: "price",
    },
    {
      headerName: "Product ID",
      field: "product_id",
    },
    {
      headerName: "SKU",
      field: "sku",
    },
  ];

  const tableActions = React.useMemo(
    () => [
      {
        name: "View Product",
        icon: <Eye size={16} />,
        onClick: (row) => {
          setShowProduct(row)
        },
      },
    ],
    [],
  );

  const { data: rows = [], isLoading, error } = useProducts(session);

  const isEmptyState = rows.length === 0;

  const { mutateAsync: clearProductsAsync, isPending: clearIsLoading } =
    useClearAllProducts();

  const handleClearAllProducts = async () => {
    const isConfirmed = confirm("Are you sure");
    if (isConfirmed) {
      const res = await clearProductsAsync();
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchProducts, setSearchProducts] = useState(null);
  const [searchIsLoading, setSearchIsLoading] = useState(false);

  const { mutateAsync: searchProductsAsync, isPending: searchIsPending } =
    useSearchProducts();

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchIsLoading(true);
    if (searchTerm == "") {
      setSearchProducts(null);
    }

    try {
      const res = await searchProductsAsync(searchTerm);
      setSearchProducts(res?.results);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchIsLoading(false);
    }
  };

  if (error) {
    return <p>Error..</p>;
  }

  if (isLoading) {
    return <ProductTableSkeleton />;
  }

  // We only show sites (projects) that are active
  return (
    <>
      <ProductModal product={showProduct} setShow={setShowProduct}/>
      <PageLayout>
        {isEmptyState ? (
          <div className={styles.empty}>
            <Image
              src="/assets/empty_product_base.png"
              alt="empty_product_base"
              width={250}
            />
            <p>Your product base is empty</p>
            <small>
              Upload an Excel catalog to import your products and make them
              searchable with natural language.
            </small>
            <CustomButton leftIcon={<Plus />} href={"/productbase/create"}>
              Create Your First Product Base
            </CustomButton>
          </div>
        ) : (
          <div>
            <DataTable
              rows={searchProducts || rows}
              columns={columns}
              // pageSize={10}
              searchable
              selectable
              dropdownFieldName="category"
              actions={tableActions}
              height={500}
              loading={searchIsLoading}
            />

            <div className={styles.head}>
              <form className={styles.search} onSubmit={handleSearch}>
                <CustomInput
                  value={searchTerm}
                  onChange={setSearchTerm}
                  placeholder={
                    'Search: try "comfortable running shoes under ₹2,000"...'
                  }
                  fullWidth
                />
                <button type="submit">
                  <Search />
                </button>
                {searchProducts && (
                  <button
                    className={styles.clear}
                    onClick={() => {
                      setSearchTerm("");
                      setSearchProducts(null);
                    }}
                    type="button"
                  >
                    <X />
                  </button>
                )}
              </form>
              <CustomButton
                variant="danger"
                rightIcon={<X />}
                loading={clearIsLoading}
                onClick={handleClearAllProducts}
              >
                Clear Product Base
              </CustomButton>
            </div>
          </div>
        )}
      </PageLayout>
    </>
  );
}
