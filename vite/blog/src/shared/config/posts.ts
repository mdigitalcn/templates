export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  cover?: string;
}

export const posts: Post[] = [
  {
    slug: "building-modern-react-apps",
    title: "Building Modern React Apps in 2025",
    excerpt: "A practical guide to React 19 features, server components, and the new compiler.",
    content: `React 19 brings significant improvements to how we build applications. The new compiler eliminates the need for useMemo and useCallback in most cases, making code cleaner and more maintainable.

## Key Features

### The React Compiler
The compiler automatically optimizes re-renders, removing the mental overhead of memoization. Write straightforward code and let the compiler handle performance.

### Server Components
Server components allow you to render components on the server, reducing bundle size and improving initial load times. They work seamlessly with client components for interactive parts.

### Actions
The new Actions API simplifies form handling and data mutations. Combined with useActionState, you get pending states and error handling out of the box.

## Getting Started

Start with Vite or Next.js - both have excellent React 19 support. Use TypeScript for type safety, and Tailwind for styling. The ecosystem has never been better.`,
    tags: ["react", "typescript", "frontend"],
    publishedAt: "2025-02-15",
    readingTime: 6,
    cover: "https://placehold.co/800x400/1a1a2e/e0e0e0?text=React+19",
  },
  {
    slug: "tailwind-v4-migration",
    title: "Migrating to Tailwind CSS v4",
    excerpt: "What changed in Tailwind v4, how to migrate, and why the new CSS-first config is better.",
    content: `Tailwind CSS v4 is a major rewrite that moves configuration from JavaScript to CSS using the new @theme directive.

## What Changed

### CSS-First Configuration
Instead of tailwind.config.js, you define your design tokens directly in CSS using @theme. This is cleaner, faster, and works better with tooling.

### No More PostCSS Plugin
Tailwind v4 uses its own Vite plugin (@tailwindcss/vite) or PostCSS plugin (@tailwindcss/postcss). The setup is simpler.

### OKLCH Colors
The default color palette uses OKLCH, providing perceptually uniform colors that look great across different displays.

## Migration Steps

1. Update dependencies to v4
2. Replace tailwind.config.js with @theme in your CSS
3. Update any custom plugins
4. Test your color choices in OKLCH`,
    tags: ["css", "tailwind", "frontend"],
    publishedAt: "2025-01-28",
    readingTime: 4,
    cover: "https://placehold.co/800x400/16213e/e0e0e0?text=Tailwind+v4",
  },
  {
    slug: "typescript-patterns",
    title: "TypeScript Patterns I Use Every Day",
    excerpt: "Practical TypeScript patterns for discriminated unions, branded types, and type-safe APIs.",
    content: `After years of TypeScript, these patterns have become second nature. They catch bugs early and make code self-documenting.

## Discriminated Unions

Perfect for state machines and API responses:

\`\`\`typescript
type Result<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string }
  | { status: "loading" };
\`\`\`

## Branded Types

Prevent mixing up primitive types:

\`\`\`typescript
type UserId = string & { __brand: "UserId" };
type OrderId = string & { __brand: "OrderId" };
\`\`\`

## Const Assertions

Lock down object shapes:

\`\`\`typescript
const routes = {
  home: "/",
  dashboard: "/dashboard",
  settings: "/settings",
} as const;
\`\`\`

These patterns make invalid states unrepresentable. Your compiler becomes your best reviewer.`,
    tags: ["typescript", "patterns", "frontend"],
    publishedAt: "2025-01-10",
    readingTime: 5,
    cover: "https://placehold.co/800x400/1a1a3e/e0e0e0?text=TypeScript",
  },
  {
    slug: "fsd-architecture",
    title: "Feature-Sliced Design for React Projects",
    excerpt: "How FSD solves the 'where do I put this file' problem once and for all.",
    content: `Feature-Sliced Design (FSD) is an architectural methodology that organizes code by business domain rather than technical role.

## The Layers

- **app** - Providers, routing, global styles
- **views** - Full page compositions
- **widgets** - Composed UI blocks
- **features** - User interactions (forms, buttons)
- **entities** - Business objects (user, product)
- **shared** - Reusable utilities, UI kit

## Why It Works

Each layer can only import from layers below it. This creates a clear dependency flow and prevents circular imports. When you need to add a feature, you know exactly where it goes.

## In Practice

A typical e-commerce project might have:
- entities/product, entities/cart, entities/user
- features/add-to-cart, features/search, features/auth
- widgets/product-card, widgets/cart-sidebar
- views/store-home, views/product-detail, views/checkout`,
    tags: ["architecture", "react", "fsd"],
    publishedAt: "2024-12-20",
    readingTime: 7,
    cover: "https://placehold.co/800x400/0f3460/e0e0e0?text=FSD",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((p) => p.tags.includes(tag));
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
