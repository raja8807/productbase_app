import styles from "./ProductTableSkeleton.module.scss";

const ProductTableSkeleton = ({ rows = 10 }) => {
  return (
    <div className={styles.tableSkeleton}>
      {Array.from({ length: rows }).map((_, index) => (
        <div className={styles.tableSkeleton__row} key={index}>
          <div className={styles.tableSkeleton__checkbox} />

          <div
            className={`${styles.tableSkeleton__cell} ${styles.tableSkeleton__name}`}
          />

          <div
            className={`${styles.tableSkeleton__cell} ${styles.tableSkeleton__description}`}
          />

          <div
            className={`${styles.tableSkeleton__pill} ${styles.tableSkeleton__category}`}
          />

          <div
            className={`${styles.tableSkeleton__cell} ${styles.tableSkeleton__brand}`}
          />

          <div
            className={`${styles.tableSkeleton__cell} ${styles.tableSkeleton__price}`}
          />

          <div
            className={`${styles.tableSkeleton__cell} ${styles.tableSkeleton__id}`}
          />

          <div
            className={`${styles.tableSkeleton__cell} ${styles.tableSkeleton__sku}`}
          />

          <div className={styles.tableSkeleton__action} />
        </div>
      ))}
    </div>
  );
};

export default ProductTableSkeleton;