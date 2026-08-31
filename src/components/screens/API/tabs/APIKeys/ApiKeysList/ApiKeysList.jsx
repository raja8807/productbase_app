"use client";

import React, { useState } from "react";
import styles from "./ApiKeysList.module.scss";
import { Copy, CopyCheck, Eye, EyeOff, KeyRound, Trash2 } from "lucide-react";
import { formatConversationTime } from "@/helpers/dateTimeHelper";
import { useDeleteApiKey } from "@/hooks/useApiKey";

const ApiKeysList = ({ apiKeys = [] }) => {
  const {
    mutateAsync: deleteKeyAsync,
    isPending,
    variables: deleting_api_key_id,
  } = useDeleteApiKey();

  const handleDelete = async (id) => {
    const isConfirmDelete = confirm("Are you sure?");

    try {
      if (isConfirmDelete) {
        await deleteKeyAsync(id);
        // setApiKeys((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.ApiKeysList}>
      <div className={styles.listHeader}>
        <span>Name</span>
        <span>API Key</span>
        <span>Created</span>
        <span>Expieres At</span>
        <span />
      </div>

      {apiKeys.map((apiKey) => (
        <div
          className={`${styles.item} ${isPending && deleting_api_key_id === apiKey.id ? styles.deleting : ""} `}
          key={apiKey.id}
        >
          <div className={styles.name}>
            <div className={styles.icon}>
              <KeyRound size={16} />
            </div>

            <strong>{apiKey.name}</strong>
          </div>

          <div className={styles.key}>
            <code>{apiKey.key_prefix}••••••••••••</code>
          </div>


          <span className={styles.date}>
            {formatConversationTime(apiKey.created_at)}
          </span>

          <span className={styles.lastUsed}>
            {formatConversationTime(apiKey.expires_at)}
          </span>

          <button
            className={styles.delete}
            onClick={() => handleDelete(apiKey.id)}
            aria-label={`Delete ${apiKey.name} API key`}
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ApiKeysList;
