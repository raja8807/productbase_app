import { Inter as MainFont } from "next/font/google";

export const mainFont = MainFont({
  variable: "--font-mainFont",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
