import { Zap, Shield, BarChart3, Users, CreditCard, Globe } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning fast", description: "Built on Next.js 15 with Turbopack and React 19 for optimal performance." },
  { icon: Shield, title: "Secure by default", description: "Authentication, RBAC, middleware guards, and security best practices." },
  { icon: BarChart3, title: "Analytics ready", description: "Dashboard with KPIs, charts, and data visualization out of the box." },
  { icon: Users, title: "Team management", description: "Invite members, assign roles, and manage workspace permissions." },
  { icon: CreditCard, title: "Stripe billing", description: "Subscriptions, checkout sessions, and webhook handling pre-wired." },
  { icon: Globe, title: "Production ready", description: "Deploy to Vercel, AWS, or any platform. Tailwind v4, TypeScript strict." },
];

export function FeatureGrid() {
  return (
    <section className="py-20" id="features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need</h2>
          <p className="mt-3 text-lg text-muted-foreground">All the tools to launch and grow your SaaS.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-[var(--radius)] border border-border p-6 transition-colors hover:border-primary/30">
              <div className="flex size-10 items-center justify-center rounded-[var(--radius)] bg-primary/10">
                <f.icon className="size-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
