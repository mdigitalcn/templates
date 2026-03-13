import { formatCurrency, formatDate } from "@/src/shared/lib";
import { cn } from "@/src/shared/lib";
import type { OrderStatus } from "@/src/entities/order";

const mockOrders = [
  { id: "1", number: "ORD-001", customer: "Jane Cooper", total: 129.99, status: "delivered" as OrderStatus, createdAt: "2025-12-01" },
  { id: "2", number: "ORD-002", customer: "Robert Fox", total: 79.99, status: "shipped" as OrderStatus, createdAt: "2025-12-15" },
  { id: "3", number: "ORD-003", customer: "Esther Howard", total: 249.98, status: "processing" as OrderStatus, createdAt: "2026-01-05" },
  { id: "4", number: "ORD-004", customer: "Cameron Wilson", total: 39.99, status: "pending" as OrderStatus, createdAt: "2026-02-20" },
];

const statusStyles: Record<OrderStatus, string> = {
  pending: "bg-warning/15 text-warning-foreground",
  processing: "bg-primary/10 text-primary",
  shipped: "bg-accent text-accent-foreground",
  delivered: "bg-success/15 text-success",
  cancelled: "bg-destructive/15 text-destructive",
};

export function SellerOrdersPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Orders</h1>
        <p className="text-sm text-muted-foreground">Track and manage customer orders.</p>
      </div>

      <div className="overflow-hidden rounded-[var(--radius)] border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Order</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Customer</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Total</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockOrders.map((o) => (
              <tr key={o.id} className="transition-colors hover:bg-muted/30">
                <td className="px-4 py-3 font-medium">{o.number}</td>
                <td className="px-4 py-3">{o.customer}</td>
                <td className="px-4 py-3">{formatCurrency(o.total)}</td>
                <td className="px-4 py-3">
                  <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium capitalize", statusStyles[o.status])}>
                    {o.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{formatDate(o.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
