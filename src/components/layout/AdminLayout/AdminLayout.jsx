"use client";

import React, { useState } from "react";
import styles from "./AdminLayout.module.scss";
import SideBar from "./SideBar/SideBar";
import AdminHeader from "../Header/AdminHeader";
import { useAuth } from "@/context/AuthContext";
import { JobProvider } from "@/context/JobContext";

const AdminLayout = ({ children }) => {
  const [sideBarCollapsed, setSidebarCollapsed] = useState(false);

  const { session } = useAuth();

  if (!session) {
    return children;
  }

  return (
    <div className={styles.AdminLayout}>
      <SideBar
        setSidebarCollapsed={setSidebarCollapsed}
        sideBarCollapsed={sideBarCollapsed}
      />
      <div className={styles.right}>
        <AdminHeader setSidebarCollapsed={setSidebarCollapsed} />
        <JobProvider>
          <div className={styles.cont}>{children}</div>
        </JobProvider>
      </div>
    </div>
  );
};

export default AdminLayout;
