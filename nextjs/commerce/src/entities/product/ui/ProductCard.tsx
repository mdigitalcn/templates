import Link from "next/link";
import { formatCurrency } from "@/src/shared/lib";
import type { Product } from "../model/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="aspect-square overflow-hidden rounded-[var(--radius)] border border-border bg-muted">
        {product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="size-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-muted-foreground">No image</div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium group-hover:text-primary transition-colors">{product.name}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-semibold">{formatCurrency(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-muted-foreground line-through">{formatCurrency(product.compareAtPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
