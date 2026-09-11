import React from "react";
import styles from "./AdminLaoyoutLoadingScreen.module.scss";

import { PBSPinner } from "../LoadingScreen";

const AdminLaoyoutLoadingScreen = () => {
  return (
    <div className={styles.AdminLaoyoutLoadingScreen}>
      <PBSPinner />
    </div>
  );
};

export default AdminLaoyoutLoadingScreen;
