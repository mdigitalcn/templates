import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar } from "@/src/widgets/navbar";
import { Footer } from "@/src/widgets/footer";

const HomePage = lazy(() => import("@/src/views/home").then((m) => ({ default: m.HomePage })));
const PricingPage = lazy(() => import("@/src/views/pricing").then((m) => ({ default: m.PricingPage })));

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="flex h-64 items-center justify-center"><div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" /></div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/pricing", element: <PricingPage /> },
    ],
  },
]);
