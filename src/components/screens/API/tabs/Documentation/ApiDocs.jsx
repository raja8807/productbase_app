"use client";

import React, { useState } from "react";
import { Check, Copy, LockKeyhole } from "lucide-react";

import styles from "./ApiDocs.module.scss";

const requestExample = `curl https://api.productbase.app/v1/products \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

const ApiDocs = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const apis = [
    {
      name: "Search Products",
      description:
        "Authenticate every request using an API key generated from your ProductBase dashboard.",

      request: {
        reqUrl: `curl https://api.productbase.app/api/v1/products/search \\
  -H "x-api-key: YOUR_API_KEY"`,

        queryParams: [
          {
            param: "q",
            type: "string",
            text: "Search term to perform semantoc search",
          },
          // {
          //   param: "limit",
          //   type: "integer",
          //   text: "Number of products per page. Maximum is 100.",
          // },
        ],
      },

      response: {
        success: {
          code: "200 OK",
          data: `{
  "query": "shoes",
  "success": true,
  "results": [
    {
      "id": "a4c14a9e-fa29-43a3-a1f2-c5f84dcf5f5f",
      "product_id": "prod_009",
      "sku": "VANS-009",
      "name": "Vans Old Skool",
      "category": "Footwear",
      "brand": "Vans",
      "price": 6499,
      "currency": null,
      "availability": null,
      "tags": "skate, sneakers, casual, shoes",
      "image_url": null,
      "distance": 0.470938889440231,
      "similarity": 0.529061110559769,
      "keyword_score": 0.05
    }
  ]
}`,
        },

        error: {
          errors: [
            {
              code: "401",
              message: "Invalid or missing API key.",
            },
            {
              code: "404",
              message: "Product could not be found.",
            },
            {
              code: "429",
              message: "Rate limit exceeded.",
            },
          ],
        },
      },
    },

//     {
//       name: "Create Product",
//       description:
//         "Create a new product in your ProductBase catalog using the API.",

//       request: {
//         reqUrl: `curl -X POST https://api.productbase.app/v1/products \\
//   -H "Authorization: Bearer YOUR_API_KEY" \\
//   -H "Content-Type: application/json" \\
//   -d '{
//     "name": "Nike Air Max 270",
//     "description": "Lightweight running shoes with responsive cushioning.",
//     "category": "Footwear",
//     "brand": "Nike",
//     "price": 8999,
//     "currency": "INR",
//     "availability": true,
//     "tags": "running, sports, shoes"
//   }'`,

//         queryParams: [],
//       },

//       response: {
//         success: {
//           code: "201 Created",
//           data: `{
//   "success": true,
//   "data": {
//     "id": "a4c14a9e-fa29-43a3-a1f2-c5f84dcf5f5f",
//     "product_id": "prod_201",
//     "sku": "NIKE-201",
//     "name": "Nike Air Max 270",
//     "description": "Lightweight running shoes with responsive cushioning.",
//     "category": "Footwear",
//     "brand": "Nike",
//     "price": 8999,
//     "currency": "INR",
//     "availability": true,
//     "tags": "running, sports, shoes",
//     "image_url": null,
//     "created_at": "2026-08-30T04:30:00Z",
//     "updated_at": "2026-08-30T04:30:00Z"
//   }
// }`,
//         },

//         error: {
//           errors: [
//             {
//               code: "400",
//               message: "Invalid product data.",
//             },
//             {
//               code: "401",
//               message: "Invalid or missing API key.",
//             },
//             {
//               code: "409",
//               message: "A product with this SKU already exists.",
//             },
//             {
//               code: "422",
//               message: "Required product fields are missing.",
//             },
//           ],
//         },
//       },
//     },

//     {
//       name: "Delete Product",
//       description:
//         "Delete a product from your ProductBase catalog using its product ID.",

//       request: {
//         reqUrl: `curl -X DELETE https://api.productbase.app/v1/products/prod_009 \\
//   -H "Authorization: Bearer YOUR_API_KEY"`,

//         queryParams: [],
//       },

//       response: {
//         success: {
//           code: "200 OK",
//           data: `{
//   "success": true,
//   "message": "Product deleted successfully",
//   "product_id": "prod_009"
// }`,
//         },

//         error: {
//           errors: [
//             {
//               code: "401",
//               message: "Invalid or missing API key.",
//             },
//             {
//               code: "404",
//               message: "Product could not be found.",
//             },
//             {
//               code: "409",
//               message: "Product cannot be deleted.",
//             },
//           ],
//         },
//       },
//     },
  ];

  return (
    <div className={styles.apiDocs}>
      <div className={styles.apiDocs__layout}>
        <main>
          {apis.map((api, index) => (
            <div className={styles.apiDocs__content} key={api.name}>
              <div className={styles.col}>
                {/* Authentication */}
                <section className={styles.apiDocs__section}>
                  <div className={styles.apiDocs__sectionHeader}>
                    <LockKeyhole size={18} />
                    <h3>{api.name}</h3>
                  </div>

                  <p>{api.description}</p>

                  <div className={styles.apiDocs__code}>
                    <div className={styles.apiDocs__codeHeader}>
                      <span>Request</span>

                      <button onClick={() => handleCopy(api.request.reqUrl)}>
                        {copied ? (
                          <>
                            <Check size={14} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>

                    <pre>
                      <code>{api.request.reqUrl}</code>
                    </pre>
                  </div>
                </section>

                {/* Parameters */}
                <section className={styles.apiDocs__section}>
                  <h3>Query parameters</h3>

                  <div className={styles.apiDocs__parameters}>
                    {api.request.queryParams.map((param) => (
                      <div
                        className={styles.apiDocs__parameter}
                        key={param.param}
                      >
                        <div>
                          <code>{param.param}</code>
                          <span>{param.type}</span>
                        </div>

                        <p>{param.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className={styles.col}>
                {/* Response */}
                <section className={styles.apiDocs__section}>
                  <div className={styles.apiDocs__responseHeader}>
                    <div>
                      <h3>Response</h3>
                      <p>Successful response</p>
                    </div>

                    <span className={styles.apiDocs__status}>
                      {api.response.success.code}
                    </span>
                  </div>

                  <div className={styles.apiDocs__code}>
                    <div className={styles.apiDocs__codeHeader}>
                      <span>application/json</span>

                      <button
                        onClick={() => handleCopy(api.response.success.data)}
                      >
                        <Copy size={14} />
                        Copy
                      </button>
                    </div>

                    <pre>
                      <code>{api.response.success.data}</code>
                    </pre>
                  </div>
                </section>

                {/* Error */}
                <section className={styles.apiDocs__section}>
                  <h3>Error responses</h3>

                  <div className={styles.apiDocs__errors}>
                    {api.response.error.errors.map((error) => (
                      <div key={error.code}>
                        <strong>{error.code}</strong>
                        <span>{error.message}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default ApiDocs;
