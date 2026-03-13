import { formatNumber, formatCurrency } from "@/src/shared/lib";
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, BarChart3 } from "lucide-react";

type Kpi = { label: string; value: string; change: number; icon: React.ReactNode };

// TODO: Replace with real data from TanStack Query hook
const kpis: Kpi[] = [
  { label: "Total Revenue", value: formatCurrency(45231), change: 12.5, icon: <DollarSign className="size-4" /> },
  { label: "Active Users", value: formatNumber(2350), change: 8.2, icon: <Users className="size-4" /> },
  { label: "Conversion Rate", value: "3.2%", change: -1.4, icon: <Activity className="size-4" /> },
  { label: "Avg. Session", value: "4m 32s", change: 5.1, icon: <BarChart3 className="size-4" /> },
];

export function KpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="rounded-[var(--radius)] border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{kpi.label}</span>
            <span className="text-muted-foreground">{kpi.icon}</span>
          </div>
          <p className="mt-2 text-2xl font-bold">{kpi.value}</p>
          <div className="mt-1 flex items-center gap-1 text-xs">
            {kpi.change >= 0 ? (
              <TrendingUp className="size-3 text-success" />
            ) : (
              <TrendingDown className="size-3 text-destructive" />
            )}
            <span className={kpi.change >= 0 ? "text-success" : "text-destructive"}>
              {Math.abs(kpi.change)}%
            </span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
