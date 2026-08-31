import { mainFont } from "@/styles/fonts";
import "../styles/globals.scss";

import AOSProvider from "@/components/layout/AOSProvider/AOSProvider";
import AdminLayout from "@/components/layout/AdminLayout/AdminLayout";
import { AuthProvider } from "@/context/AuthContext";
import QueryProvider from "@/providers/QueryProvider";

export const metadata = {
  title: "ProductBase",
  description: "Product catalog management platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mainFont.variable}>
      <body>
        <AOSProvider>
          <QueryProvider>
            <AuthProvider>
              <AdminLayout>
                <main style={{ flex: 1 }}>{children}</main>
              </AdminLayout>
            </AuthProvider>
          </QueryProvider>
        </AOSProvider>
      </body>
    </html>
  );
}
