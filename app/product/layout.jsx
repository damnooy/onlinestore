"use client";

import { CartProvider } from "react-use-cart";

export default function Layout({children}) {
    return <CartProvider>{children}</CartProvider>
}