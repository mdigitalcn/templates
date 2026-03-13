import { Suspense } from "react";
import { DashboardSidebar } from "@/src/widgets/dashboard-sidebar";
import { DashboardHeader } from "@/src/widgets/dashboard-header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card md:block">
        <DashboardSidebar />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<DashboardSkeleton />}>
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6 p-6">
      <div className="h-8 w-48 animate-pulse rounded-[var(--radius)] bg-muted" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-[var(--radius)] bg-muted" />
        ))}
      </div>
      <div className="h-64 animate-pulse rounded-[var(--radius)] bg-muted" />
    </div>
  );
}
