import React from "react";
import second from "./LoadingScreen.module.scss";
import styles from "./LoadingScreen.module.scss";

export const PBSPinner = () => {

  return <div className={styles.spinner} />;
};

const LoadingScreen = () => {
  return (
    <div className={styles.preloader}>
      <PBSPinner />
    </div>
  );
};

export default LoadingScreen;
