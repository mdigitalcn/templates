import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

// Layouts
import { MarketingHeader } from "@/src/widgets/marketing-header";
import { MarketingFooter } from "@/src/widgets/marketing-footer";
import { DashboardSidebar } from "@/src/widgets/dashboard-sidebar";
import { DashboardHeader } from "@/src/widgets/dashboard-header";
import { SettingsNav } from "@/src/features/settings";

// Lazy pages
const HomePage = lazy(() => import("@/src/views/home").then((m) => ({ default: m.HomePage })));
const PricingPage = lazy(() => import("@/src/views/pricing").then((m) => ({ default: m.PricingPage })));
const SignInPage = lazy(() => import("@/src/views/sign-in").then((m) => ({ default: m.SignInPage })));
const SignUpPage = lazy(() => import("@/src/views/sign-up").then((m) => ({ default: m.SignUpPage })));
const OverviewPage = lazy(() => import("@/src/views/overview").then((m) => ({ default: m.OverviewPage })));
const AnalyticsPage = lazy(() => import("@/src/views/analytics").then((m) => ({ default: m.AnalyticsPage })));
const GeneralSettingsPage = lazy(() => import("@/src/views/general-settings").then((m) => ({ default: m.GeneralSettingsPage })));
const ProfileSettingsPage = lazy(() => import("@/src/views/profile-settings").then((m) => ({ default: m.ProfileSettingsPage })));
const BillingSettingsPage = lazy(() => import("@/src/views/billing-settings").then((m) => ({ default: m.BillingSettingsPage })));
const TeamSettingsPage = lazy(() => import("@/src/views/team-settings").then((m) => ({ default: m.TeamSettingsPage })));
const NotificationSettingsPage = lazy(() => import("@/src/views/notification-settings").then((m) => ({ default: m.NotificationSettingsPage })));

function Loader() {
  return <div className="flex h-64 items-center justify-center"><div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" /></div>;
}

function MarketingLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="flex-1"><Suspense fallback={<Loader />}><Outlet /></Suspense></main>
      <MarketingFooter />
    </div>
  );
}

function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm"><Suspense fallback={<Loader />}><Outlet /></Suspense></div>
    </div>
  );
}

function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card md:block">
        <DashboardSidebar />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto"><Suspense fallback={<Loader />}><Outlet /></Suspense></main>
      </div>
    </div>
  );
}

function SettingsLayout() {
  return (
    <div className="flex flex-col gap-6 p-6 lg:flex-row">
      <aside className="w-full shrink-0 lg:w-52"><SettingsNav /></aside>
      <div className="min-w-0 flex-1"><Outlet /></div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/pricing", element: <PricingPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <OverviewPage /> },
      { path: "/dashboard/analytics", element: <AnalyticsPage /> },
      {
        path: "/settings",
        element: <SettingsLayout />,
        children: [
          { index: true, element: <GeneralSettingsPage /> },
          { path: "profile", element: <ProfileSettingsPage /> },
          { path: "billing", element: <BillingSettingsPage /> },
          { path: "team", element: <TeamSettingsPage /> },
          { path: "notifications", element: <NotificationSettingsPage /> },
        ],
      },
    ],
  },
]);
