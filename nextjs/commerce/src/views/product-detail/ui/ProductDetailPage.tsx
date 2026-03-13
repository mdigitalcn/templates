"use client";

import { use } from "react";
import { formatCurrency } from "@/src/shared/lib";
import { AddToCart } from "@/src/features/cart";
import type { Product } from "@/src/entities/product";

// TODO: Replace with real data fetching via TanStack Query
function getProduct(id: string): Product {
  return {
    id,
    name: "Example Product",
    slug: "example-product",
    description: "This is a placeholder product. Replace with real data from your API.",
    price: 49.99,
    images: [],
    categoryId: "cat1",
    inStock: true,
    rating: 4.7,
    reviewCount: 128,
    createdAt: new Date().toISOString(),
  };
}

export function ProductDetailPage({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  const { id } = use(paramsPromise);
  const product = getProduct(id);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="aspect-square rounded-[var(--radius)] bg-muted" />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">{formatCurrency(product.price)}</p>
          <p className="leading-relaxed text-muted-foreground">{product.description}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>★ {product.rating.toFixed(1)}</span>
            <span>·</span>
            <span>{product.reviewCount} reviews</span>
          </div>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
