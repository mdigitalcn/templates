import { LayoutDashboard, BarChart3, Settings, type LucideIcon } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const dashboardNav: NavItem[] = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export const marketingNav: NavItem[] = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];
