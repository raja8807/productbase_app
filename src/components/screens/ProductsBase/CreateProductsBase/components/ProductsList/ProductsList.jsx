import React from "react";
import styles from "./ProductsList.module.scss";
import DataTable from "@/components/ui/DataTable/DataTable";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Save, SaveCheck } from "lucide-react";

const ProductsList = ({ file, clearFile, products, createProductList,isPending }) => {
  const columns = [
    {
      headerName: "Product ID",
      field: "product_id",
    },
    {
      headerName: "SKU",
      field: "sku",
    },
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Description",
      field: "description",
      minWidth: 250,
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
      headerName: "tags",
      field: "tags",
    },
  ];

  return (
    <div>
      <DataTable height={400} columns={columns} noHead rows={products} />
      <br />
      <div className={styles.bottom}>
        <div className={styles.selectedFile}>
          <div className={styles.fileIcon}>X</div>

          <div className={styles.fileInfo}>
            <p className={styles.fileName}>
              {file.name} - ({products.length} Rows)
            </p>

            <p className={styles.fileSize}>
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>

          <button
            type="button"
            className={styles.remove}
            onClick={clearFile}
            aria-label="Remove file"
          >
            x
          </button>
        </div>

        <CustomButton loading={isPending} rightIcon={<SaveCheck />}  onClick={createProductList}>
          Create product base
        </CustomButton>
      </div>
    </div>
  );
};

export default ProductsList;
