import type { Metadata } from "next";
import { BillingSettingsPage } from "@/src/views/billing-settings";

export const metadata: Metadata = { title: "Billing" };

export default function BillingRoute() {
  return <BillingSettingsPage />;
}
