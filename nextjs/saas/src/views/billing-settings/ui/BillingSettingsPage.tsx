"use client";

import { PlanSelector } from "@/src/features/billing";
import { createCheckoutSession } from "@/src/entities/subscription";

export function BillingSettingsPage() {
  async function handleSelect(planId: string) {
    // TODO: Wire to real Stripe checkout
    try {
      const { url } = await createCheckoutSession(planId);
      window.location.href = url;
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing & Plans</h3>
        <p className="text-sm text-muted-foreground">Manage your subscription and payment method.</p>
      </div>
      <PlanSelector currentPlanId="free" onSelect={handleSelect} />
    </div>
  );
}
