import { NextResponse } from "next/server";

// POST /api/stripe/webhook — handle Stripe events
// TODO: Install stripe and implement signature verification:
//   const sig = request.headers.get("stripe-signature")!;
//   const event = stripe.webhooks.constructEvent(body, sig, env.STRIPE_WEBHOOK_SECRET);
export async function POST(request: Request) {
  const _body = await request.text();

  // switch (event.type) {
  //   case "checkout.session.completed":
  //     // Provision access
  //     break;
  //   case "customer.subscription.updated":
  //     // Update plan in DB
  //     break;
  //   case "customer.subscription.deleted":
  //     // Revoke access
  //     break;
  // }

  return NextResponse.json({ received: true });
}
