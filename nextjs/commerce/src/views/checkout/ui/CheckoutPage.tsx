"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formatCurrency } from "@/src/shared/lib";
import { useCartStore } from "@/src/features/cart";

const checkoutSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  address: z.string().min(5),
  city: z.string().min(2),
  zip: z.string().min(3),
});

type CheckoutInput = z.infer<typeof checkoutSchema>;

export function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutInput>({
    resolver: zodResolver(checkoutSchema),
  });

  async function onSubmit(data: CheckoutInput) {
    // TODO: Create order and redirect to Stripe
    console.log("Checkout:", data, items);
    clearCart();
  }

  const fields = [
    { name: "email" as const, label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "name" as const, label: "Full name", type: "text", placeholder: "Jane Doe" },
    { name: "address" as const, label: "Address", type: "text", placeholder: "123 Main St" },
    { name: "city" as const, label: "City", type: "text", placeholder: "San Francisco" },
    { name: "zip" as const, label: "ZIP code", type: "text", placeholder: "94101" },
  ];

  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {items.length} items · {formatCurrency(total())}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="space-y-1.5">
            <label htmlFor={field.name} className="block text-sm font-medium">{field.label}</label>
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              className="block w-full rounded-[var(--radius)] border border-border bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              {...register(field.name)}
            />
            {errors[field.name] && <p className="text-xs text-destructive">{errors[field.name]?.message}</p>}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting || items.length === 0}
          className="w-full rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
        >
          {isSubmitting ? "Processing…" : `Pay ${formatCurrency(total())}`}
        </button>
      </form>
    </div>
  );
}
