"use client";

import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Copy, KeyRound, Plus, X } from "lucide-react";
import React, { useState } from "react";
import styles from "./CreateAPIKeyForm.module.scss";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect";
import { useCreateApiKey } from "@/hooks/useApiKey";
import { Modal } from "react-bootstrap";

const CreateAPIKeyForm = ({ setApiKeys }) => {
  const [showCreate, setShowCreate] = useState(false);
  const [showNewKey, setShowNewKey] = useState(null);

  const [values, setValues] = useState({
    name: "",
    environment: "development",
    expiration: "never",
  });

  

  const { mutateAsync: createApiKeyAsync, isPending } = useCreateApiKey();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setApiKeys((prev) => [x, ...prev]);

    try {
      const res = await createApiKeyAsync(values);
      console.log(res);

      setShowCreate(false);
      setShowNewKey(res);
    } catch (error) {
      console.log(error);
    }

    // create API key
  };

  return (
    <>
      <Modal
        show={showNewKey}
        centered
        onHide={() => {
          setShowNewKey(null);
        }}
      >
        <Modal.Header closeButton>{showNewKey?.name}</Modal.Header>

        <Modal.Body>
          <div className={styles.keyModal}>
            <p>
              Copy and store this API key securely. You won&apos;t be able to
              view it again.
            </p>

            <div className={styles.keyModal__key}>
              <CustomInput fullWidth disabled value={showNewKey?.raw_key} />

              <button
                type="button"
                className={styles.keyModal__copy}
                onClick={() =>
                  navigator.clipboard.writeText(showNewKey?.raw_key)
                }
                aria-label="Copy API key"
              >
                <Copy size={17} />
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className={styles.CreateAPIKeyForm}>
        <div className={styles.header}>
          <div>
            <div className={styles.title}>
              <KeyRound size={20} />
              <h1>API Keys</h1>
            </div>

            <p>
              Manage API keys used to authenticate requests to the ProductBase
              API.
            </p>
          </div>

          <CustomButton leftIcon={<Plus />} onClick={() => setShowCreate(true)}>
            Create API Key
          </CustomButton>
        </div>

        {showCreate && (
          <div className={styles.createCard}>
            <div className={styles.createHeader}>
              <div>
                <h2>Create API Key</h2>
                <p>
                  Create a new API key to authenticate requests to your
                  ProductBase API.
                </p>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setShowCreate(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.controls}>
                <div className={styles.field}>
                  <label htmlFor="keyName">Key name</label>

                  <CustomInput
                    id="keyName"
                    name="keyName"
                    type="text"
                    placeholder="e.g. Production"
                    required
                    value={values.name}
                    onChange={(v) =>
                      setValues((prev) => ({ ...prev, name: v }))
                    }
                  />

                  <span>
                    Give your API key a name so you can identify it later.
                  </span>
                </div>

                <div className={styles.field}>
                  <label htmlFor="environment">Environment</label>

                  <CustomSelect
                    id="environment"
                    name="environment"
                    
                    placeholder="Select Environment"
                    value={values.environment}
                    onSelect={(o) => {
                      setValues((prev) => ({ ...prev, environment: o.value }));
                    }}
                    options={[
                      {
                        label: "Production",
                        value: "production",
                      },
                      {
                        label: "Development",
                        value: "development",
                      },
                    ]}
                  ></CustomSelect>
                </div>

                <div className={styles.field}>
                  <label htmlFor="expiration">Expiration</label>

                  <CustomSelect
                    id="expiration"
                    name="expiration"
                    
                    value={values.expiration}
                    onSelect={(o) => {
                      setValues((prev) => ({ ...prev, expiration: o.value }));
                    }}
                    options={[
                      {
                        label: "Never",
                        value: "never",
                      },
                      {
                        label: "30 days",
                        value: "30",
                      },
                      {
                        label: "60 days",
                        value: "60",
                      },
                      {
                        label: "90 days",
                        value: "90",
                      },
                      {
                        label: "1 year",
                        value: "365",
                      },
                    ]}
                  ></CustomSelect>
                </div>
              </div>

              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setShowCreate(false)}
                >
                  Cancel
                </button>

                <CustomButton type="submit" loading={isPending}>
                  Create API Key
                </CustomButton>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateAPIKeyForm;
