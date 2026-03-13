"use client";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "@/src/shared/lib";
import { LayoutDashboard, Package, ShoppingBag, BarChart3, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/src/app/config/site";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/products", label: "Products", icon: Package },
  { href: "/dashboard/orders", label: "Orders", icon: ShoppingBag },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
];

export function SellerSidebar() {
  const { pathname } = useLocation();

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border p-4">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <div className="flex size-8 items-center justify-center rounded-[var(--radius)] bg-primary text-sm text-primary-foreground">
            {siteConfig.name.charAt(0)}
          </div>
          <span>Seller</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-2 rounded-[var(--radius)] px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-3">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-[var(--radius)] px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to store
        </Link>
      </div>
    </div>
  );
}
