"use client";

import { mainFont } from "@/styles/fonts";
import "../styles/globals.scss";

import AOSProvider from "@/components/layout/AOSProvider/AOSProvider";
import AdminLayout from "@/components/layout/AdminLayout/AdminLayout";
import { AuthProvider } from "@/context/AuthContext";
import QueryProvider from "@/providers/QueryProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mainFont.variable}`}>
      <body>
        <AOSProvider>
          <QueryProvider>
            <AuthProvider>
              <AdminLayout>
                {/* <p>x</p> */}
                <main style={{ flex: 1 }}>{children}</main>
              </AdminLayout>
            </AuthProvider>
          </QueryProvider>
        </AOSProvider>
      </body>
    </html>
  );
}
