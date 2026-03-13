import type { Metadata } from "next";
import { SellerProductsPage } from "@/src/views/seller-products";

export const metadata: Metadata = { title: "Products" };

export default function ProductsRoute() {
  return <SellerProductsPage />;
}
