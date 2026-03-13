import { Suspense } from "react";
import { SellerSidebar } from "@/src/widgets/seller-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card md:block">
        <SellerSidebar />
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Suspense fallback={<div className="p-6"><div className="h-64 animate-pulse rounded-[var(--radius)] bg-muted" /></div>}>
          {children}
        </Suspense>
      </main>
    </div>
  );
}
