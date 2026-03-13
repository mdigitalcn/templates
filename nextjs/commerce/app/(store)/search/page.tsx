import type { Metadata } from "next";
import { SearchResultsPage } from "@/src/views/search-results";

export const metadata: Metadata = { title: "Search" };

export default function SearchRoute() {
  return <SearchResultsPage />;
}
