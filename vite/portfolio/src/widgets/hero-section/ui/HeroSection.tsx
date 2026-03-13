import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/src/app/config/site";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <p className="text-sm font-medium text-primary">Hi, I'm</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-6xl">
        {siteConfig.name}
      </h1>
      <h2 className="mt-2 text-2xl text-muted-foreground md:text-3xl">
        {siteConfig.title}
      </h2>
      <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
        {siteConfig.description}
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          View Projects
          <ArrowRight className="size-4" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-[var(--radius)] border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
