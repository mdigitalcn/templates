import type { Metadata } from "next";
import { SellerDashboardPage } from "@/src/views/seller-dashboard";

export const metadata: Metadata = { title: "Seller Dashboard" };

export default function SellerDashboardRoute() {
  return <SellerDashboardPage />;
}
