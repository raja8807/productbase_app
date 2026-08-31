"use client";

import React, { useState } from "react";
import {
  Copy,
  CopyCheck,
  Eye,
  EyeOff,
  KeyRound,
  Plus,
  Trash2,
} from "lucide-react";

import styles from "./ApiKeys.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import CreateAPIKeyForm from "./CreateAPIKeyForm/CreateAPIKeyForm";
import ApiKeysList from "./ApiKeysList/ApiKeysList";
import { useGetApiKeys } from "@/hooks/useApiKey";

const ApiKeys = () => {

  const {data = [],isLoading} = useGetApiKeys()

  

  return (
    <div className={styles.apiKeys}>
      <CreateAPIKeyForm  />

      <div className={styles.apiKeys__notice}>
        <KeyRound size={18} />

        <div>
          <strong>Keep your API keys secure</strong>

          <p>
            API keys provide access to your ProductBase data. Never expose them
            in client-side code or public repositories.
          </p>
        </div>
      </div>

      {data.length ? (
        <ApiKeysList apiKeys={data}  />
      ) : null}

      <div className={styles.apiKeys__empty}>
        <p>
          API keys are used as Bearer tokens when calling the ProductBase API.
        </p>

        <code>Authorization: Bearer YOUR_API_KEY</code>
      </div>
    </div>
  );
};

export default ApiKeys;
