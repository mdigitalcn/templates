import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Sidebar } from "@/src/widgets/sidebar";
import { TopBar } from "@/src/widgets/top-bar";

const OverviewPage = lazy(() => import("@/src/views/overview").then((m) => ({ default: m.OverviewPage })));
const UsersPage = lazy(() => import("@/src/views/users").then((m) => ({ default: m.UsersPage })));
const ProjectsPage = lazy(() => import("@/src/views/projects").then((m) => ({ default: m.ProjectsPage })));
const SettingsPage = lazy(() => import("@/src/views/settings").then((m) => ({ default: m.SettingsPage })));

function Loader() {
  return <div className="flex h-64 items-center justify-center"><div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" /></div>;
}

function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <aside className="hidden w-60 shrink-0 border-r border-border bg-card md:block">
        <Sidebar />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6">
          <Suspense fallback={<Loader />}><Outlet /></Suspense>
        </main>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <OverviewPage /> },
      { path: "/users", element: <UsersPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/settings", element: <SettingsPage /> },
    ],
  },
]);
