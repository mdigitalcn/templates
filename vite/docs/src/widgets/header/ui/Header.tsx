import { NavLink } from "react-router-dom";
import { Github, Search } from "lucide-react";
import { siteConfig } from "@/src/app/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <NavLink to="/" className="font-bold tracking-tight">{siteConfig.name}</NavLink>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-[var(--radius)] border border-border px-3 py-1.5 sm:flex">
            <Search className="size-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search docs..."
              className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">/</kbd>
          </div>
          <a
            href={siteConfig.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[var(--radius)] p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
