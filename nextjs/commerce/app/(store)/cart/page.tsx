import type { Metadata } from "next";
import { CartPage } from "@/src/views/cart";

export const metadata: Metadata = { title: "Cart" };

export default function CartRoute() {
  return <CartPage />;
}
