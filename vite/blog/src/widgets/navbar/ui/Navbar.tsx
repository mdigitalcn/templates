import { NavLink } from "react-router-dom";
import { siteConfig } from "@/src/app/config/site";
import { cn } from "@/src/shared/lib";

const links = [
  { to: "/", label: "Home" },
  { to: "/posts", label: "Posts" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <NavLink to="/" className="font-bold tracking-tight">{siteConfig.name}</NavLink>
        <nav className="flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                cn("rounded-[var(--radius)] px-3 py-1.5 text-sm transition-colors",
                  isActive ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
