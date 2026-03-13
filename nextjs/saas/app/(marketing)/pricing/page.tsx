import type { Metadata } from "next";
import { PricingPage } from "@/src/views/pricing";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingRoute() {
  return <PricingPage />;
}
