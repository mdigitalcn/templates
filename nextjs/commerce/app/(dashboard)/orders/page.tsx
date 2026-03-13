import type { Metadata } from "next";
import { SellerOrdersPage } from "@/src/views/seller-orders";

export const metadata: Metadata = { title: "Orders" };

export default function OrdersRoute() {
  return <SellerOrdersPage />;
}
