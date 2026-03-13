"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/src/entities/product";
import type { Product } from "@/src/entities/product";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  // TODO: Replace with TanStack Query search hook
  const results: Product[] = [];

  return (
    <>
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
    </>
  );
}

export function SearchResultsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Suspense fallback={<div className="h-8 w-64 animate-pulse rounded-[var(--radius)] bg-muted" />}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
