import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Carattere } from "next/font/google";
import { LoadContextProvider } from "@/utils/context";

const inter = Carattere({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <LoadContextProvider>{children}</LoadContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
