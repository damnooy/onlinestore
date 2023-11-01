"use client";

import Navbar from "@/components/navbar";
import { CartProvider } from "react-use-cart";

export default function Layout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      {children}
    </CartProvider>
  );
}
