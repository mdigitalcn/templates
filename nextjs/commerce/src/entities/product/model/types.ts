export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  categoryId: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  createdAt: string;
};
