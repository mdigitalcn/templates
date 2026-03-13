import { NextResponse } from "next/server";

// POST /api/stripe/checkout — create Stripe Checkout session for order
export async function POST(request: Request) {
  const { items } = await request.json();

  // TODO: Create Stripe checkout session with items
  // const session = await stripe.checkout.sessions.create({ ... });

  return NextResponse.json({ url: `/checkout?items=${items.length}` });
}
