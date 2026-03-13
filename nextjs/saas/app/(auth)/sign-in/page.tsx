import type { Metadata } from "next";
import { SignInPage } from "@/src/views/sign-in";

export const metadata: Metadata = { title: "Sign in" };

export default function SignInRoute() {
  return <SignInPage />;
}
