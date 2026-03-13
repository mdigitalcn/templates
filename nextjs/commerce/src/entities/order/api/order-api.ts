import { api } from "@/src/shared/api";
import type { PaginatedResponse } from "@/src/shared/api";
import type { Order } from "../model/types";

export async function getOrders(page = 1) {
  return api<PaginatedResponse<Order>>(`/api/orders?page=${page}`);
}

export async function getOrderById(id: string) {
  return api<Order>(`/api/orders/${id}`);
}
