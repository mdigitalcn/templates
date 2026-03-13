"use client";

import { Link } from "react-router-dom";
import { Trash2, Minus, Plus } from "lucide-react";
import { formatCurrency } from "@/src/shared/lib";
import { useCartStore } from "@/src/features/cart";

export function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Add some products to get started.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-[var(--radius)] bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="mt-6 divide-y divide-border rounded-[var(--radius)] border">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center gap-4 p-4">
            <div className="size-16 shrink-0 rounded-[var(--radius)] bg-muted" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{item.product.name}</p>
              <p className="text-sm text-muted-foreground">{formatCurrency(item.product.price)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                className="flex size-7 items-center justify-center rounded-[var(--radius)] border border-border transition-colors hover:bg-muted"
              >
                <Minus className="size-3" />
              </button>
              <span className="w-8 text-center text-sm">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                className="flex size-7 items-center justify-center rounded-[var(--radius)] border border-border transition-colors hover:bg-muted"
              >
                <Plus className="size-3" />
              </button>
            </div>
            <p className="w-20 text-right text-sm font-semibold">
              {formatCurrency(item.product.price * item.quantity)}
            </p>
            <button
              onClick={() => removeItem(item.product.id)}
              className="text-muted-foreground transition-colors hover:text-destructive"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-semibold">Total: {formatCurrency(total())}</span>
        <Link
          to="/checkout"
          className="rounded-[var(--radius)] bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
