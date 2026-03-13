import type { Metadata } from "next";
import { SignUpPage } from "@/src/views/sign-up";

export const metadata: Metadata = { title: "Sign up" };

export default function SignUpRoute() {
  return <SignUpPage />;
}
