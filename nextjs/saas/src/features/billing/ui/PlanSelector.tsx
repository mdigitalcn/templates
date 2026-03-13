"use client";

import { cn } from "@/src/shared/lib";
import { formatCurrency } from "@/src/shared/lib";
import type { Plan } from "@/src/entities/subscription";
import { Check } from "lucide-react";

const plans: Plan[] = [
  { id: "free", name: "Free", price: 0, interval: "month", features: ["1 project", "100 API calls/day", "Community support"] },
  { id: "pro", name: "Pro", price: 29, interval: "month", features: ["Unlimited projects", "10K API calls/day", "Priority support", "Analytics"], highlighted: true },
  { id: "enterprise", name: "Enterprise", price: 99, interval: "month", features: ["Everything in Pro", "Unlimited API calls", "Dedicated support", "SSO & SAML", "SLA guarantee"] },
];

type Props = {
  currentPlanId?: string;
  onSelect: (planId: string) => void;
};

export function PlanSelector({ currentPlanId, onSelect }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {plans.map((plan) => {
        const isCurrent = plan.id === currentPlanId;
        return (
          <div
            key={plan.id}
            className={cn(
              "rounded-[var(--radius)] border p-6 transition-colors",
              plan.highlighted ? "border-primary shadow-md" : "border-border",
              isCurrent && "border-primary/50 bg-primary/5",
            )}
          >
            <h4 className="font-semibold">{plan.name}</h4>
            <p className="mt-1 text-2xl font-bold">
              {plan.price === 0 ? "Free" : <>{formatCurrency(plan.price)}<span className="text-sm font-normal text-muted-foreground">/mo</span></>}
            </p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 shrink-0 text-success" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onSelect(plan.id)}
              disabled={isCurrent}
              className={cn(
                "mt-6 w-full rounded-[var(--radius)] px-4 py-2 text-sm font-medium transition-colors",
                isCurrent
                  ? "cursor-default bg-muted text-muted-foreground"
                  : "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              {isCurrent ? "Current plan" : "Upgrade"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
