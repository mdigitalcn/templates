import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join thousands of teams already building with our platform.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="#"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start for free <ArrowRight className="size-4" />
          </Link>
          <Link
            to="#"
            className="rounded-[var(--radius)] border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
