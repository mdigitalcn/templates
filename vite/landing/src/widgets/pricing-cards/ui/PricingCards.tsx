import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { cn } from "@/src/shared/lib";

const plans = [
  { name: "Free", price: "$0", interval: "forever", features: ["1 project", "100 API calls/day", "Community support"], cta: "Get started", highlighted: false },
  { name: "Pro", price: "$29", interval: "/month", features: ["Unlimited projects", "10K API calls/day", "Priority support", "Analytics dashboard", "Team members"], cta: "Start free trial", highlighted: true },
  { name: "Enterprise", price: "$99", interval: "/month", features: ["Everything in Pro", "Unlimited API calls", "Dedicated support", "SSO & SAML", "SLA guarantee", "Custom integrations"], cta: "Contact sales", highlighted: false },
];

export function PricingCards() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-lg text-muted-foreground">No hidden fees. Upgrade or downgrade anytime.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-[var(--radius)] border p-8 transition-shadow",
                plan.highlighted ? "border-primary shadow-lg" : "border-border",
              )}
            >
              <h3 className="font-semibold">{plan.name}</h3>
              <p className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.interval}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 shrink-0 text-success" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/sign-up"
                className={cn(
                  "mt-8 block rounded-[var(--radius)] px-4 py-2 text-center text-sm font-medium transition-colors",
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-muted",
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
