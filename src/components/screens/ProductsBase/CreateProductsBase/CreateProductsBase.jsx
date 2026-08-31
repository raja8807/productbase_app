"use client";

import CustomButton from "@/components/ui/CustomButton/CustomButton";
import CustomCard from "@/components/ui/CustomCard/CustomCard";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { Download, FileSpreadsheet, Save, SaveAll, X } from "lucide-react";
import React, { useState } from "react";
import styles from "./CreateProductsBase.module.scss";
import FileUpload from "@/components/common/FileUpload/FileUpload";
import ProductsList from "./components/ProductsList/ProductsList";
import * as XLSX from "xlsx";
import { useImportProductFile } from "@/hooks/useProducts";
import { useJob } from "@/context/JobContext";
import { useRouter } from "next/navigation";

const CreateProductsBaseScreen = () => {
  const [file, setFile] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const clearFile = () => {
    setFile(null);
    setProducts([]);
  };

  const requiredHeaders = [
    "product_id",
    "sku",
    "name",
    "description",
    "category",
    "brand",
    "price",
    "tags",
  ];

  const handleFile = async (selectedFile) => {
    if (!selectedFile) return;

    const isExcel = selectedFile.name.toLowerCase().endsWith(".xlsx");

    if (!isExcel) {
      setError("Please upload an Excel (.xlsx) file.");
      return;
    }

    const buffer = await selectedFile.arrayBuffer();

    const workbook = XLSX.read(buffer, {
      type: "array",
    });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Read the first row as headers
    const headers = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      range: 0,
    })[0];

    const normalizedHeaders = headers.map((header) =>
      String(header).trim().toLowerCase(),
    );

    const missingHeaders = requiredHeaders.filter(
      (header) => !normalizedHeaders.includes(header),
    );

    if (missingHeaders.length > 0) {
      setError(`Missing required columns: ${missingHeaders.join(", ")}`);
      return;
    }

    const products = XLSX.utils.sheet_to_json(worksheet);

    setProducts(products);
    setFile(selectedFile);
    setError("");
  };

  const handleLoadSampleData = async () => {
    try {
      const response = await fetch(
        "/sample/ProductBase_Catalog_50_Products.xlsx",
      );

      if (!response.ok) {
        throw new Error("Failed to load sample file");
      }

      const blob = await response.blob();

      const file = new File([blob], "ProductBase_Catalog_50_Products.xlsx", {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      await handleFile(file);
    } catch (error) {
      console.error("Failed to load sample data:", error);
    }
  };

  const hadleDownloadTemplate = () => {
    const link = document.createElement("a");
    link.href = "/templates/ProductBase_Template.xlsx";
    link.download = "ProductBase_Template.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { mutateAsync, isPending } = useImportProductFile();

  const { setActiveJob } = useJob();

  const router = useRouter();

  const handleCreateProductList = async () => {
    const res = await mutateAsync(file);

    if (res.job_id) {
      setActiveJob({
        id: res.job_id,
        status: res.status,
      });

      router.push("/producbase/create/import");
    }
  };

  return (
    <PageLayout>
      <CustomCard
        head={"Import Your Products List"}
        rightElement={
          file ? (
            <CustomButton variant="ghost" rightIcon={<X />} onClick={clearFile}>
              Clear rows
            </CustomButton>
          ) : (
            <CustomButton
              variant="outline"
              rightIcon={<FileSpreadsheet />}
              onClick={hadleDownloadTemplate}
            >
              Download Excel template
            </CustomButton>
          )
        }
      >
        {file && (
          <ProductsList
            file={file}
            clearFile={clearFile}
            products={products}
            createProductList={handleCreateProductList}
            isPending={isPending}
          />
        )}
        {!file && (
          <>
            <div className={styles.fileUpload}>
              <FileUpload onFileSelect={handleFile} errorMessage={error} />
            </div>
            <div className={styles.btn}>
              <CustomButton
                variant="outline"
                rightIcon={<FileSpreadsheet />}
                onClick={hadleDownloadTemplate}
              >
                Download Excel template
              </CustomButton>
              <small>Or</small>
              <p onClick={handleLoadSampleData}>Load Sample Data</p>
            </div>
          </>
        )}
      </CustomCard>
    </PageLayout>
  );
};

export default CreateProductsBaseScreen;
