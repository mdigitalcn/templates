# mdigitalcn templates

10 project starter templates for the mdigitalcn ecosystem. Each template scaffolds a full application with routing, auth, layouts, and sample pages pre-wired.

Not published to npm — consumed via the [mdigitalcn CLI](https://github.com/mdigitalcn/cli).

## Templates

| Template | Stack | Description |
|----------|-------|-------------|
| `vite/saas` | Vite + React | SaaS with auth, billing, team management |
| `vite/dashboard` | Vite + React | Admin panel with data tables, stats, user management |
| `vite/landing` | Vite + React | Marketing landing page |
| `vite/commerce` | Vite + React | E-commerce storefront with cart and checkout |
| `vite/blog` | Vite + React | Blog with posts, tags, search |
| `vite/docs` | Vite + React | Documentation site with sidebar, search, TOC |
| `vite/portfolio` | Vite + React | Project showcase with detail pages |
| `nextjs/saas` | Next.js 15 | SaaS with SSR, App Router |
| `nextjs/landing` | Next.js 15 | Landing page with SSR |
| `nextjs/commerce` | Next.js 15 | E-commerce with SSR and streaming |

## Use via CLI

```bash
mdigitalcn template list
mdigitalcn template info vite/dashboard

# Scaffold a project with a template
mdigitalcn init my-app --template vite/dashboard
mdigitalcn init my-saas --template nextjs/saas --cicd github
```

The CLI scaffolds the base project (configs, tooling, package.json) and overlays the template's app code on top.

## What each template includes

- TanStack Router (Vite) or App Router (Next.js) with typed routes
- `@mdigitalcn/uikit` pre-configured with theme and global styles
- Layout from `mdigitalcn_layouts` matching the template type
- Sample pages from `mdigitalcn_pages`
- Tailwind CSS v4, TypeScript strict, ESLint, Prettier
- FSD (Feature-Sliced Design) directory structure

## License

MIT
