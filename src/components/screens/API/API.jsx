"use client";

import React, { useMemo, useState } from "react";
import styles from "./API.module.scss";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import CustomTabs from "@/components/ui/CustomTabs/CustomTabs";
import APIKeysTab from "./tabs/APIKeys/APIKeys";

import CustomCard from "@/components/ui/CustomCard/CustomCard";
import ApiDocs from "./tabs/Documentation/ApiDocs";

const APIScreen = () => {
  const tabs = useMemo(() => {
    return [
      {
        title: "Documentation",
        component: <ApiDocs />,
      },
      {
        title: "API Keys",
        component: <APIKeysTab />,
      },
    ];
  }, []);

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = tabs[activeTabIndex];

  return (
    <div className={styles.APIScreen}>
      <PageLayout>
        <CustomCard>
          <CustomTabs
            tabs={tabs}
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
          />
          {activeTab.component}
        </CustomCard>
      </PageLayout>
    </div>
  );
};

export default APIScreen;
