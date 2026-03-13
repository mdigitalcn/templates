import { NextResponse } from "next/server";
import { env } from "@/src/shared/config";

// POST /api/stripe/checkout — create Stripe Checkout session
// TODO: Install stripe and implement:
//   import Stripe from "stripe";
//   const stripe = new Stripe(env.STRIPE_SECRET_KEY);
export async function POST(request: Request) {
  const { priceId } = await request.json();

  // const session = await stripe.checkout.sessions.create({
  //   mode: "subscription",
  //   line_items: [{ price: priceId, quantity: 1 }],
  //   success_url: `${env.SITE_URL}/settings/billing?success=true`,
  //   cancel_url: `${env.SITE_URL}/settings/billing`,
  // });
  // return NextResponse.json({ url: session.url });

  return NextResponse.json({ url: `/settings/billing?plan=${priceId}` });
}
