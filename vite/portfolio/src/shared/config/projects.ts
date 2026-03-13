export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  year: number;
}

export const projects: ProjectData[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payments, real-time inventory, and seller dashboard.",
    longDescription: "Built a complete e-commerce solution handling 10k+ products with Stripe integration, real-time stock updates via WebSockets, and a comprehensive seller analytics dashboard. The platform processes over $500k in monthly transactions.",
    image: "https://placehold.co/800x450/1a1a2e/e0e0e0?text=E-Commerce",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "WebSocket"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/johndoe/ecommerce",
    year: 2025,
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with customizable widgets and reports.",
    longDescription: "Designed and built an internal analytics tool that processes millions of events daily. Features include drag-and-drop dashboard builder, scheduled PDF reports, and team collaboration with role-based access.",
    image: "https://placehold.co/800x450/16213e/e0e0e0?text=Analytics",
    tags: ["TypeScript", "React", "D3.js", "ClickHouse", "Redis"],
    liveUrl: "https://example.com",
    year: 2024,
  },
  {
    slug: "mobile-fitness-app",
    title: "Fitness Tracker",
    description: "Cross-platform mobile app with workout tracking, social features, and Apple Health sync.",
    longDescription: "React Native application with offline-first architecture using WatermelonDB. Integrates with Apple Health and Google Fit for automatic activity tracking. Social features include workout sharing and leaderboards.",
    image: "https://placehold.co/800x450/1a1a3e/e0e0e0?text=Fitness+App",
    tags: ["React Native", "TypeScript", "WatermelonDB", "HealthKit"],
    sourceUrl: "https://github.com/johndoe/fitness",
    year: 2024,
  },
  {
    slug: "developer-tools",
    title: "CLI Dev Tools",
    description: "Collection of developer CLI tools for code scaffolding and project management.",
    longDescription: "Open-source CLI toolkit written in Rust that generates project boilerplates, manages component registries, and automates common development workflows. Used by 2k+ developers.",
    image: "https://placehold.co/800x450/0f3460/e0e0e0?text=CLI+Tools",
    tags: ["Rust", "CLI", "Open Source"],
    sourceUrl: "https://github.com/johndoe/devtools",
    year: 2025,
  },
];
