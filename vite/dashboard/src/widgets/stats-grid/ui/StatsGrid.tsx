import { Users, FolderKanban, TrendingUp, Activity } from "lucide-react";
import { formatNumber } from "@/src/shared/lib";

interface Stat {
  label: string;
  value: number;
  change: number;
  icon: React.ElementType;
}

const stats: Stat[] = [
  { label: "Total Users", value: 2847, change: 12.5, icon: Users },
  { label: "Active Projects", value: 34, change: 8.2, icon: FolderKanban },
  { label: "Revenue", value: 48250, change: -3.1, icon: TrendingUp },
  { label: "Active Now", value: 127, change: 24.8, icon: Activity },
];

export function StatsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isPositive = stat.change >= 0;
        return (
          <div key={stat.label} className="rounded-[var(--radius)] border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <Icon className="size-4 text-muted-foreground" />
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">
              {stat.label === "Revenue" ? `$${formatNumber(stat.value)}` : formatNumber(stat.value)}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className={isPositive ? "text-success" : "text-destructive"}>
                {isPositive ? "+" : ""}{stat.change}%
              </span>{" "}
              from last month
            </p>
          </div>
        );
      })}
    </div>
  );
}
