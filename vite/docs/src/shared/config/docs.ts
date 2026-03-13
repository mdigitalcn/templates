export interface DocSection {
  title: string;
  items: DocPage[];
}

export interface DocPage {
  slug: string;
  title: string;
  content: string;
}

export const sections: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        slug: "introduction",
        title: "Introduction",
        content: `Welcome to Acme. This guide will help you get up and running quickly.

## What is Acme?

Acme is a modern platform for building applications. It provides a set of tools and services that handle the boring parts so you can focus on what matters.

## Key Features

- **Fast Setup** - Get started in under 5 minutes
- **Type Safe** - Full TypeScript support out of the box
- **Extensible** - Plugin system for custom functionality
- **Well Documented** - Comprehensive guides and API reference`,
      },
      {
        slug: "installation",
        title: "Installation",
        content: `Install Acme using your preferred package manager.

## Using npm

\`\`\`bash
npm install @acme/core
\`\`\`

## Using pnpm

\`\`\`bash
pnpm add @acme/core
\`\`\`

## Requirements

- Node.js 20 or later
- TypeScript 5.7 or later (recommended)

## Verify Installation

\`\`\`typescript
import { createApp } from "@acme/core";

const app = createApp();
console.log(app.version);
\`\`\``,
      },
      {
        slug: "quickstart",
        title: "Quick Start",
        content: `Build your first Acme app in 3 steps.

## 1. Create a Project

\`\`\`bash
npx create-acme-app my-app
cd my-app
\`\`\`

## 2. Start Development

\`\`\`bash
pnpm dev
\`\`\`

## 3. Open Your Browser

Navigate to http://localhost:3000. You should see the welcome page.

## Next Steps

- Read the [Configuration](/docs/configuration) guide
- Explore the [API Reference](/docs/api-overview)
- Join the community on Discord`,
      },
    ],
  },
  {
    title: "Configuration",
    items: [
      {
        slug: "configuration",
        title: "Configuration",
        content: `Acme is configured through a \`acme.config.ts\` file in your project root.

## Basic Configuration

\`\`\`typescript
import { defineConfig } from "@acme/core";

export default defineConfig({
  name: "my-app",
  port: 3000,
  database: {
    url: process.env.DATABASE_URL,
  },
});
\`\`\`

## Environment Variables

Acme automatically loads \`.env\` files. Supported files:

- \`.env\` - Always loaded
- \`.env.local\` - Local overrides (gitignored)
- \`.env.production\` - Production only
- \`.env.development\` - Development only`,
      },
      {
        slug: "plugins",
        title: "Plugins",
        content: `Extend Acme with plugins for authentication, databases, and more.

## Installing a Plugin

\`\`\`typescript
import { defineConfig } from "@acme/core";
import { authPlugin } from "@acme/auth";
import { dbPlugin } from "@acme/db";

export default defineConfig({
  plugins: [
    authPlugin({ provider: "github" }),
    dbPlugin({ adapter: "postgres" }),
  ],
});
\`\`\`

## Creating a Plugin

\`\`\`typescript
import { createPlugin } from "@acme/core";

export const myPlugin = createPlugin({
  name: "my-plugin",
  setup(app) {
    app.on("request", (req) => {
      console.log(req.method, req.url);
    });
  },
});
\`\`\``,
      },
    ],
  },
  {
    title: "API Reference",
    items: [
      {
        slug: "api-overview",
        title: "API Overview",
        content: `The Acme API follows RESTful conventions with full TypeScript types.

## Base URL

All API requests use the base URL configured in your app:

\`\`\`
https://api.acme.com/v1
\`\`\`

## Authentication

Include your API key in the Authorization header:

\`\`\`bash
curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.acme.com/v1/users
\`\`\`

## Response Format

All responses follow this structure:

\`\`\`json
{
  "data": { ... },
  "meta": { "page": 1, "total": 42 }
}
\`\`\`

## Error Handling

Errors return appropriate HTTP status codes with a message:

\`\`\`json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource not found"
  }
}
\`\`\``,
      },
    ],
  },
];

export function getDocBySlug(slug: string): DocPage | undefined {
  for (const section of sections) {
    const page = section.items.find((p) => p.slug === slug);
    if (page) return page;
  }
  return undefined;
}

export function getNavigation(): { title: string; items: { slug: string; title: string }[] }[] {
  return sections.map((s) => ({
    title: s.title,
    items: s.items.map((i) => ({ slug: i.slug, title: i.title })),
  }));
}
