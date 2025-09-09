# Links Tracker

A full-stack link tracking and analytics platform built on Cloudflare infrastructure. Track link clicks, analyze geographic distribution, and manage dynamic link routing with real-time analytics.

## 🚀 Features

- **Link Management**: Create, edit, and organize trackable links
- **Geographic Routing**: Route users to different destinations based on their location
- **Real-time Analytics**: Track clicks, monitor performance, and analyze user behavior
- **Interactive Dashboard**: Visual maps, charts, and tables for comprehensive analytics
- **Authentication**: Secure user authentication with Better Auth and Stripe integration
- **Real-time Updates**: WebSocket connections for live click tracking

## 🏗️ Architecture

This is a monorepo built with modern technologies and deployed on Cloudflare:

### Frontend (`user-application`)
- **React 19** with TypeScript
- **TanStack Router** for routing
- **TanStack Query** for data fetching
- **Tailwind CSS** with Radix UI components
- **React Simple Maps** for geographic visualizations
- **Socket.io** for real-time updates
- **Vite** for build tooling

### Backend (`data-service`)
- **Cloudflare Workers** as serverless functions
- **Hono** web framework for API routing
- **D1 Database** for data persistence
- **Durable Objects** for stateful operations
- **Queue Handlers** for background processing
- **Workflows** for complex business logic
- **AI integration** with Cloudflare AI

## 📦 Project Structure

```
├── apps/
│   ├── user-application/          # React frontend
│   │   ├── src/
│   │   │   ├── components/        # UI components
│   │   │   ├── routes/            # App routes & pages
│   │   │   ├── hooks/             # Custom React hooks
│   │   │   ├── lib/               # Utility libraries
│   │   │   ├── styles/            # CSS and styling
│   │   │   └── utils/             # Helper functions
│   │   └── worker/                # Cloudflare Worker for tRPC
│   └── data-service/              # Backend API service
│       └── src/
│           ├── durable-objects/   # Cloudflare Durable Objects
│           ├── helpers/           # Utility functions
│           ├── hono/              # Hono app configuration
│           ├── queue-handlers/    # Background job processing
│           └── workflows/         # Business logic workflows
├── packages/
│   └── data-ops/                  # Shared data operations
│       ├── db/                    # Database schemas & queries
│       ├── better-auth/           # Authentication configuration
│       └── zod/                   # Schema validation
└── pnpm-workspace.yaml           # Workspace configuration
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm
- Cloudflare account (for deployment)

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
```

### Running the Project

```bash
# Start the frontend development server
pnpm dev-frontend

# Start the backend data service
pnpm dev-data-service

# Build packages
pnpm build-package
```

The frontend will be available at `http://localhost:3000`

### Available Scripts

**Root Level:**
- `pnpm dev-frontend` - Start frontend development server on port 3000
- `pnpm dev-data-service` - Start backend service with Wrangler remote bindings
- `pnpm build-package` - Build shared data-ops package
- `pnpm stage:deploy-frontend` - Deploy frontend to staging environment
- `pnpm prod:deploy-frontend` - Deploy frontend to production environment

**Frontend (user-application):**
- `pnpm dev` - Development server with Vite
- `pnpm build` - Build for staging
- `pnpm prod:build` - Build for production
- `pnpm test` - Run Vitest tests
- `pnpm stage:deploy` - Deploy to staging
- `pnpm prod:deploy` - Deploy to production

**Backend (data-service):**
- `pnpm dev` - Development with Wrangler remote bindings
- `pnpm test` - Run Vitest tests with Workers pool
- `pnpm stage:deploy` - Deploy to staging environment
- `pnpm prod:deploy` - Deploy to production environment

**Data Operations (packages/data-ops):**
- `pnpm build` - Build TypeScript to dist/
- `pnpm migrate` - Run database migrations
- `pnpm generate` - Generate Drizzle schemas
- `pnpm studio` - Launch Drizzle Studio

## 🔧 Key Features

### Link Management
- Create trackable short links
- Edit link names and destinations
- Support for default and geographic-specific destinations
- Link performance analytics

### Geographic Routing
- Route users based on their country/location
- Configure different destinations per geographic region
- Visual geographic analytics with interactive maps

### Analytics Dashboard
- Real-time click tracking
- Geographic distribution maps
- Top countries and cities analysis
- Link performance metrics
- Problematic links identification

### Real-time Updates
- WebSocket integration for live click updates
- Real-time dashboard updates
- Live geographic click visualization

## 🚀 Deployment

The project is configured for deployment on Cloudflare with staging and production environments:

### Staging Deployment
```bash
# Deploy frontend to staging
pnpm stage:deploy-frontend

# Deploy backend to staging
cd apps/data-service
pnpm stage:deploy
```

### Production Deployment
```bash
# Deploy frontend to production
pnpm prod:deploy-frontend

# Deploy backend to production
cd apps/data-service
pnpm prod:deploy
```

### Environment Configuration
The project uses Cloudflare Workers with environment-specific configurations:
- **Staging**: `--env stage`
- **Production**: `--env production`

Ensure your `wrangler.toml` files are properly configured for each environment.

## 🧪 Testing

```bash
# Run tests for user application
cd apps/user-application
pnpm test

# Run tests for data service
cd apps/data-service
pnpm test
```

## 🛡️ Security

- Authentication handled by Better Auth
- Stripe integration for payments
- Type-safe APIs with tRPC and Zod validation
- Secure environment variable management

## 📈 Analytics Features

- **Metrics Cards**: Overview of key performance indicators
- **Active Areas Map**: Visual representation of click locations
- **Regional Analysis**: Country and city-based click distribution
- **Link Performance**: Individual link analytics and troubleshooting
- **Real-time Monitoring**: Live click tracking and updates

## 🔗 Technology Stack

### Frontend
- **React 19** with TypeScript for modern UI development
- **TanStack Router** for file-based routing with type safety
- **TanStack Query** for efficient data fetching and caching
- **Tailwind CSS v4** with Radix UI components for styling
- **Framer Motion** for smooth animations
- **React Simple Maps** for geographic data visualization
- **Socket.io Client** for real-time updates
- **Vite** for fast development and building

### Backend
- **Cloudflare Workers** for serverless edge computing
- **Hono** lightweight web framework for Workers
- **Cloudflare D1** SQLite database at the edge
- **Drizzle ORM** for type-safe database operations
- **Cloudflare Durable Objects** for stateful operations
- **Cloudflare Queues** for background job processing
- **Cloudflare Workflows** for complex business logic
- **Cloudflare AI** for AI-powered features

### Shared/Tools
- **TypeScript** for end-to-end type safety
- **Better Auth** with Stripe integration for authentication
- **Zod** for runtime schema validation
- **pnpm Workspaces** for monorepo management
- **Vitest** for unit and integration testing
- **Wrangler** for Cloudflare deployment and development

## 📄 License

ISC License New
