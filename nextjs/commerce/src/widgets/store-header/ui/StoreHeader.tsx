"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { siteConfig } from "@/src/app/config/site";
import { SearchBar } from "@/src/features/search";
import { useCartStore } from "@/src/features/cart";

export function StoreHeader() {
  const itemCount = useCartStore((s) => s.itemCount());

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0 font-bold">
          {siteConfig.name}
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <SearchBar />
        </div>

        <div className="flex items-center gap-3">
          <Link href="/sign-in" className="text-muted-foreground transition-colors hover:text-foreground">
            <User className="size-5" />
          </Link>
          <Link href="/cart" className="relative text-muted-foreground transition-colors hover:text-foreground">
            <ShoppingCart className="size-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
