import { api } from "@/src/shared/api";
import type { User } from "@/src/entities/user";
import type { LoginInput, RegisterInput } from "../model/validation";

export async function signIn(data: LoginInput) {
  return api<{ user: User; token: string }>("/api/auth/sign-in", { method: "POST", body: data });
}

export async function signUp(data: Omit<RegisterInput, "confirmPassword">) {
  return api<{ user: User; token: string }>("/api/auth/sign-up", { method: "POST", body: data });
}

export async function signOut() {
  return api<void>("/api/auth/sign-out", { method: "POST" });
}
