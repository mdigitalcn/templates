import { NavLink } from "react-router-dom";
import { getNavigation } from "@/src/shared/config";
import { cn } from "@/src/shared/lib";

export function DocSidebar() {
  const nav = getNavigation();

  return (
    <nav className="space-y-6">
      {nav.map((section) => (
        <div key={section.title}>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {section.title}
          </h4>
          <ul className="space-y-0.5">
            {section.items.map((item) => (
              <li key={item.slug}>
                <NavLink
                  to={`/docs/${item.slug}`}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-[var(--radius)] px-3 py-1.5 text-sm transition-colors",
                      isActive
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
