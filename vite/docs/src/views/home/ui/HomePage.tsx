import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Zap, Puzzle } from "lucide-react";
import { siteConfig } from "@/src/app/config/site";

const cards = [
  { icon: Zap, title: "Quick Start", description: "Get up and running in 5 minutes", link: "/docs/quickstart" },
  { icon: BookOpen, title: "Guides", description: "Step-by-step configuration guides", link: "/docs/configuration" },
  { icon: Puzzle, title: "API Reference", description: "Complete API documentation", link: "/docs/api-overview" },
];

export function HomePage() {
  return (
    <div className="py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">{siteConfig.name}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{siteConfig.description}</p>
        <div className="mt-6 flex gap-3">
          <Link
            to="/docs/introduction"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {cards.map(({ icon: Icon, title, description, link }) => (
          <Link
            key={title}
            to={link}
            className="group rounded-[var(--radius)] border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <Icon className="size-5 text-primary" />
            <h3 className="mt-3 font-medium">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
