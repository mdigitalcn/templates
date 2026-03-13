import { AnalyticsCharts } from "@/src/widgets/analytics-charts";

export function AnalyticsPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground">Detailed metrics and trends.</p>
      </div>
      <AnalyticsCharts />
    </div>
  );
}
