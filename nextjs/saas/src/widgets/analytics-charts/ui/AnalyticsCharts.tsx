// TODO: Replace with recharts, tremor, or chart.js for production charts
const revenueData = [40, 55, 45, 60, 75, 65, 80, 90, 85, 95, 88, 100];

const sourceData = [
  { source: "Organic Search", pct: 45 },
  { source: "Direct", pct: 25 },
  { source: "Social Media", pct: 18 },
  { source: "Referral", pct: 12 },
];

export function AnalyticsCharts() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {/* Revenue chart */}
      <div className="rounded-[var(--radius)] border border-border bg-card p-6">
        <h4 className="text-sm font-medium text-muted-foreground">Revenue over time</h4>
        <div className="mt-4 flex h-48 items-end gap-1.5">
          {revenueData.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-primary/20 transition-colors hover:bg-primary/40"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>Jan</span>
          <span>Jun</span>
          <span>Dec</span>
        </div>
      </div>

      {/* Sources breakdown */}
      <div className="rounded-[var(--radius)] border border-border bg-card p-6">
        <h4 className="text-sm font-medium text-muted-foreground">Users by source</h4>
        <div className="mt-4 space-y-3">
          {sourceData.map((item) => (
            <div key={item.source}>
              <div className="flex justify-between text-sm">
                <span>{item.source}</span>
                <span className="text-muted-foreground">{item.pct}%</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-muted">
                <div
                  className="h-2 rounded-full bg-primary transition-all"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
