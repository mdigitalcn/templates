import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPrefixes = ["/dashboard", "/settings"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = protectedPrefixes.some((p) => pathname.startsWith(p));

  if (!isProtected) return NextResponse.next();

  // TODO: Replace with your auth check (e.g. session cookie, JWT)
  // const session = request.cookies.get("session")?.value;
  // if (!session) {
  //   const signInUrl = new URL("/sign-in", request.url);
  //   signInUrl.searchParams.set("callbackUrl", pathname);
  //   return NextResponse.redirect(signInUrl);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"],
};
