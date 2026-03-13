"use client";

import { ShoppingCart } from "lucide-react";
import type { Product } from "@/src/entities/product";
import { useCartStore } from "../model/cart-store";

export function AddToCart({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <button
      onClick={() => addItem(product)}
      disabled={!product.inStock}
      className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
    >
      <ShoppingCart className="size-4" />
      {product.inStock ? "Add to cart" : "Out of stock"}
    </button>
  );
}
