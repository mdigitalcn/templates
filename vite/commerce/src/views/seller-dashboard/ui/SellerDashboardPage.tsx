import { formatCurrency, formatNumber } from "@/src/shared/lib";
import { DollarSign, Package, ShoppingBag, TrendingUp } from "lucide-react";

const kpis = [
  { label: "Revenue", value: formatCurrency(12450), change: "+14%", icon: DollarSign },
  { label: "Orders", value: formatNumber(342), change: "+8%", icon: ShoppingBag },
  { label: "Products", value: "48", change: "+3", icon: Package },
  { label: "Conversion", value: "3.2%", change: "+0.4%", icon: TrendingUp },
];

export function SellerDashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Seller Dashboard</h1>
        <p className="text-sm text-muted-foreground">Overview of your store performance.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-[var(--radius)] border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{kpi.label}</span>
              <kpi.icon className="size-4 text-muted-foreground" />
            </div>
            <p className="mt-2 text-2xl font-bold">{kpi.value}</p>
            <p className="mt-1 text-xs text-success">{kpi.change} vs last month</p>
          </div>
        ))}
      </div>
    </div>
  );
}
