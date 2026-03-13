import { api } from "@/src/shared/api";
import type { User } from "../model/types";

export async function getCurrentUser() {
  return api<User>("/api/user");
}

export async function updateUser(data: Partial<Pick<User, "name" | "email" | "avatarUrl">>) {
  return api<User>("/api/user", { method: "PATCH", body: data });
}
