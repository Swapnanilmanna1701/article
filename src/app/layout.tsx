"use client";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { store } from "@/services/store";

import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={` antialiased`}>{children}</body>
      </Provider>
    </html>
  );
}
