import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { StoreHeader } from "@/src/widgets/store-header";
import { SellerSidebar } from "@/src/widgets/seller-sidebar";

const StoreHomePage = lazy(() => import("@/src/views/store-home").then((m) => ({ default: m.StoreHomePage })));
const ProductDetailPage = lazy(() => import("@/src/views/product-detail").then((m) => ({ default: m.ProductDetailPage })));
const SearchResultsPage = lazy(() => import("@/src/views/search-results").then((m) => ({ default: m.SearchResultsPage })));
const CartPage = lazy(() => import("@/src/views/cart").then((m) => ({ default: m.CartPage })));
const CheckoutPage = lazy(() => import("@/src/views/checkout").then((m) => ({ default: m.CheckoutPage })));
const SignInPage = lazy(() => import("@/src/views/sign-in").then((m) => ({ default: m.SignInPage })));
const SignUpPage = lazy(() => import("@/src/views/sign-up").then((m) => ({ default: m.SignUpPage })));
const SellerDashboardPage = lazy(() => import("@/src/views/seller-dashboard").then((m) => ({ default: m.SellerDashboardPage })));
const SellerProductsPage = lazy(() => import("@/src/views/seller-products").then((m) => ({ default: m.SellerProductsPage })));
const SellerOrdersPage = lazy(() => import("@/src/views/seller-orders").then((m) => ({ default: m.SellerOrdersPage })));
const SellerAnalyticsPage = lazy(() => import("@/src/views/seller-analytics").then((m) => ({ default: m.SellerAnalyticsPage })));

function Loader() {
  return <div className="flex h-64 items-center justify-center"><div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" /></div>;
}

function StoreLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <StoreHeader />
      <main className="flex-1"><Suspense fallback={<Loader />}><Outlet /></Suspense></main>
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
        <SellerSidebar />
      </aside>
      <main className="flex-1 overflow-y-auto"><Suspense fallback={<Loader />}><Outlet /></Suspense></main>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <StoreLayout />,
    children: [
      { path: "/", element: <StoreHomePage /> },
      { path: "/product/:id", element: <ProductDetailPage /> },
      { path: "/search", element: <SearchResultsPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
  { path: "/checkout", element: <Suspense fallback={<Loader />}><CheckoutPage /></Suspense> },
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
      { path: "/dashboard", element: <SellerDashboardPage /> },
      { path: "/dashboard/products", element: <SellerProductsPage /> },
      { path: "/dashboard/orders", element: <SellerOrdersPage /> },
      { path: "/dashboard/analytics", element: <SellerAnalyticsPage /> },
    ],
  },
]);
