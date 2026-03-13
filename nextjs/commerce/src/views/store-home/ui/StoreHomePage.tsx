import { ProductCard } from "@/src/entities/product";
import type { Product } from "@/src/entities/product";

// TODO: Replace with TanStack Query hook fetching from API
const mockProducts: Product[] = Array.from({ length: 8 }, (_, i) => ({
  id: `p${i + 1}`,
  name: `Product ${i + 1}`,
  slug: `product-${i + 1}`,
  description: "A great product for modern needs.",
  price: 29.99 + i * 10,
  compareAtPrice: i % 3 === 0 ? 49.99 + i * 10 : undefined,
  images: [],
  categoryId: "cat1",
  inStock: i % 5 !== 0,
  rating: 4 + Math.random(),
  reviewCount: Math.floor(Math.random() * 200),
  createdAt: new Date().toISOString(),
}));

export function StoreHomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold">All Products</h1>
      <p className="mt-1 text-sm text-muted-foreground">Browse our latest collection.</p>
      <div className="mt-8 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
