import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Header } from "@/src/widgets/header";
import { DocSidebar } from "@/src/widgets/sidebar";

const HomePage = lazy(() => import("@/src/views/home").then((m) => ({ default: m.HomePage })));
const DocPageView = lazy(() => import("@/src/views/doc-page").then((m) => ({ default: m.DocPageView })));

function Loader() {
  return <div className="flex h-64 items-center justify-center"><div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" /></div>;
}

function DocsLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-0">
        <aside className="hidden w-56 shrink-0 border-r border-border lg:block">
          <div className="sticky top-14 overflow-y-auto p-4">
            <DocSidebar />
          </div>
        </aside>
        <main className="min-w-0 flex-1 px-8 py-6">
          <Suspense fallback={<Loader />}><Outlet /></Suspense>
        </main>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <DocsLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/docs", element: <Navigate to="/docs/introduction" replace /> },
      { path: "/docs/:slug", element: <DocPageView /> },
    ],
  },
]);
