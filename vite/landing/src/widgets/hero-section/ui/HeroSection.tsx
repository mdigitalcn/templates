import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          Now in public beta — try it free →
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Build your SaaS{" "}
          <span className="text-primary">faster than ever</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          The modern starter template with authentication, billing, dashboard, and everything you
          need to launch your product.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/sign-up"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get started <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/pricing"
            className="rounded-[var(--radius)] border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
