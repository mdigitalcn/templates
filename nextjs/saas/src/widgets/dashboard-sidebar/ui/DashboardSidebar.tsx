"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/shared/lib";
import { LogOut } from "lucide-react";
import { siteConfig } from "@/src/app/config/site";
import { dashboardNav } from "@/src/app/config/nav";
import { useAuthStore } from "@/src/features/auth";

export function DashboardSidebar() {
  const pathname = usePathname();
  const logout = useAuthStore((s) => s.logout);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border p-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="flex size-8 items-center justify-center rounded-[var(--radius)] bg-primary text-sm text-primary-foreground">
            {siteConfig.name.charAt(0)}
          </div>
          <span>{siteConfig.name}</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {dashboardNav.map((item) => {
          const active =
            pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-[var(--radius)] px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {Icon && <Icon className="size-4" />}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-3">
        <button
          onClick={logout}
          className="flex w-full items-center gap-2 rounded-[var(--radius)] px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <LogOut className="size-4" />
          Sign out
        </button>
      </div>
    </div>
  );
}
