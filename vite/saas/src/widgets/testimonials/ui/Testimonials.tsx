const testimonials = [
  { quote: "This saved us months of development time. We launched in weeks.", name: "Sarah Chen", title: "CTO, Acme Inc" },
  { quote: "The best SaaS starter I've used. Clean FSD architecture, just works.", name: "Mike Johnson", title: "Founder, StartupXYZ" },
  { quote: "We migrated from a custom setup — the architecture made everything cleaner.", name: "Emily Park", title: "Lead Dev, TechCorp" },
];

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight">Loved by developers</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-[var(--radius)] border border-border bg-card p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
