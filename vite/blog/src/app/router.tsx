import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar } from "@/src/widgets/navbar";
import { Footer } from "@/src/widgets/footer";

const HomePage = lazy(() => import("@/src/views/home").then((m) => ({ default: m.HomePage })));
const PostsPage = lazy(() => import("@/src/views/posts").then((m) => ({ default: m.PostsPage })));
const PostDetailPage = lazy(() => import("@/src/views/post-detail").then((m) => ({ default: m.PostDetailPage })));
const TagsPage = lazy(() => import("@/src/views/tags").then((m) => ({ default: m.TagsPage })));

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
      { path: "/posts", element: <PostsPage /> },
      { path: "/posts/:slug", element: <PostDetailPage /> },
      { path: "/tags/:tag", element: <TagsPage /> },
    ],
  },
]);
