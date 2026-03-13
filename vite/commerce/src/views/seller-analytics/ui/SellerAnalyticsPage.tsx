// TODO: Replace with recharts or tremor for production charts
const revenueData = [30, 45, 35, 50, 65, 55, 70, 80, 75, 85, 78, 90];

export function SellerAnalyticsPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground">Sales performance and trends.</p>
      </div>

      <div className="rounded-[var(--radius)] border border-border bg-card p-6">
        <h3 className="text-sm font-medium text-muted-foreground">Monthly Revenue</h3>
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
          <span>Jan</span><span>Jun</span><span>Dec</span>
        </div>
      </div>
    </div>
  );
}
