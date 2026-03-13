import { NextResponse } from "next/server";

// POST /api/stripe/webhook — handle Stripe events for orders
export async function POST(request: Request) {
  const _body = await request.text();

  // TODO: Verify signature and handle events
  // case "checkout.session.completed": create order
  // case "payment_intent.succeeded": mark order as paid

  return NextResponse.json({ received: true });
}
