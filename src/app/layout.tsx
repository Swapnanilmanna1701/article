"use client"
import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import App from "./page";
import { store } from "@/services/store";

import { Provider } from "react-redux";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
        <Provider store={store}>
      <App />
    </Provider>
      </body>
    </html>
  );
}
