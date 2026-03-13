import { KpiCards } from "@/src/widgets/kpi-cards";
import { AnalyticsCharts } from "@/src/widgets/analytics-charts";

export function OverviewPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Overview of your project metrics.</p>
      </div>
      <KpiCards />
      <AnalyticsCharts />
    </div>
  );
}
