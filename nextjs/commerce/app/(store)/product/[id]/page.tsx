import type { Metadata } from "next";
import { ProductDetailPage } from "@/src/views/product-detail";

export const metadata: Metadata = { title: "Product" };

export default function ProductRoute({ params }: { params: Promise<{ id: string }> }) {
  return <ProductDetailPage paramsPromise={params} />;
}
