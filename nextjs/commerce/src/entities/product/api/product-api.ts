import { api } from "@/src/shared/api";
import type { PaginatedResponse } from "@/src/shared/api";
import type { Product } from "../model/types";

export type ProductFilters = {
  categoryId?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  pageSize?: number;
};

export async function getProducts(filters?: ProductFilters) {
  const params = new URLSearchParams();
  if (filters) {
    Object.entries(filters).forEach(([k, v]) => {
      if (v !== undefined) params.set(k, String(v));
    });
  }
  return api<PaginatedResponse<Product>>(`/api/products?${params}`);
}

export async function getProductById(id: string) {
  return api<Product>(`/api/products/${id}`);
}
