import React from "react";
import { Modal } from "react-bootstrap";
import {
  BadgeIndianRupee,
  Building2,
  Hash,
  Package,
  Tag,
  X,
} from "lucide-react";

import styles from "./ProductModal.module.scss";

const ProductModal = ({ product, setShow }) => {
  if (!product) return null;

  const tags = product.tags
    ? product.tags.split(",").map((tag) => tag.trim())
    : [];

  return (
    <Modal
      show={!!product}
      onHide={() => setShow(null)}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Product Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className={styles.productModal}>
          {/* Product Header */}
          <div className={styles.productModal__header}>
            <div className={styles.productModal__image}>
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                />
              ) : (
                <Package size={42} />
              )}
            </div>

            <div className={styles.productModal__title}>
              <div className={styles.productModal__category}>
                {product.category || "Uncategorized"}
              </div>

              <h2>{product.name}</h2>

              <p>
                {product.brand || "Unknown brand"}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className={styles.productModal__section}>
            <h3>Description</h3>

            <p className={styles.productModal__description}>
              {product.description || "No description available."}
            </p>
          </div>

          {/* Product Information */}
          <div className={styles.productModal__section}>
            <h3>Product Information</h3>

            <div className={styles.productModal__grid}>
              <div className={styles.productModal__info}>
                <div className={styles.productModal__icon}>
                  <Hash size={16} />
                </div>

                <div>
                  <span>Product ID</span>
                  <strong>{product.product_id || "-"}</strong>
                </div>
              </div>

              <div className={styles.productModal__info}>
                <div className={styles.productModal__icon}>
                  <Tag size={16} />
                </div>

                <div>
                  <span>SKU</span>
                  <strong>{product.sku || "-"}</strong>
                </div>
              </div>

              <div className={styles.productModal__info}>
                <div className={styles.productModal__icon}>
                  <Building2 size={16} />
                </div>

                <div>
                  <span>Brand</span>
                  <strong>{product.brand || "-"}</strong>
                </div>
              </div>

              <div className={styles.productModal__info}>
                <div className={styles.productModal__icon}>
                  <BadgeIndianRupee size={16} />
                </div>

                <div>
                  <span>Price</span>
                  <strong>
                    {product.currency
                      ? `${product.currency} ${product.price}`
                      : `₹${product.price?.toLocaleString("en-IN")}`}
                  </strong>
                </div>
              </div>

              <div className={styles.productModal__info}>
                <div className={styles.productModal__icon}>
                  <Package size={16} />
                </div>

                <div>
                  <span>Availability</span>
                  <strong>
                    {product.availability ?? "Not specified"}
                  </strong>
                </div>
              </div>

              <div className={styles.productModal__info}>
                <div className={styles.productModal__icon}>
                  <Tag size={16} />
                </div>

                <div>
                  <span>Category</span>
                  <strong>{product.category || "-"}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className={styles.productModal__section}>
              <h3>Tags</h3>

              <div className={styles.productModal__tags}>
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;