import type { Metadata } from "next";
import { CheckoutPage } from "@/src/views/checkout";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutRoute() {
  return <CheckoutPage />;
}
