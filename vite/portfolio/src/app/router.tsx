import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar } from "@/src/widgets/navbar";
import { Footer } from "@/src/widgets/footer";

const HomePage = lazy(() => import("@/src/views/home").then((m) => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import("@/src/views/projects").then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import("@/src/views/project-detail").then((m) => ({ default: m.ProjectDetailPage })));
const AboutPage = lazy(() => import("@/src/views/about").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("@/src/views/contact").then((m) => ({ default: m.ContactPage })));

function Loader() {
  return <div className="flex h-64 items-center justify-center"><div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" /></div>;
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<Loader />}><Outlet /></Suspense>
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
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/projects/:slug", element: <ProjectDetailPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
