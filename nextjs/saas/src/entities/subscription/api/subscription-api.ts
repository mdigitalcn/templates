import { api } from "@/src/shared/api";
import type { Subscription } from "../model/types";

export async function getSubscription() {
  return api<Subscription>("/api/subscription");
}

export async function createCheckoutSession(priceId: string) {
  return api<{ url: string }>("/api/stripe/checkout", { method: "POST", body: { priceId } });
}

export async function cancelSubscription() {
  return api<Subscription>("/api/subscription/cancel", { method: "POST" });
}
