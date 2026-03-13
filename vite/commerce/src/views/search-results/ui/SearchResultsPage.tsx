"use client";

import { useSearchParams } from "react-router-dom";
import { ProductCard } from "@/src/entities/product";
import type { Product } from "@/src/entities/product";

export function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  // TODO: Replace with TanStack Query search hook
  const results: Product[] = [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold">
        Search results for &ldquo;{query}&rdquo;
      </h1>
      {results.length === 0 ? (
        <p className="mt-4 text-muted-foreground">No products found. Try a different search term.</p>
      ) : (
        <div className="mt-8 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
