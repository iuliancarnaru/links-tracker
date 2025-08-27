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
- **Hono** web framework
- **tRPC** for type-safe APIs
- **D1 Database** for data persistence
- **AI integration** with Cloudflare AI

## 📦 Project Structure

```
├── apps/
│   ├── user-application/          # React frontend
│   │   ├── src/
│   │   │   ├── components/        # UI components
│   │   │   │   ├── dashboard/     # Analytics dashboard
│   │   │   │   ├── link/          # Link management
│   │   │   │   ├── auth/          # Authentication
│   │   │   │   └── ui/            # Reusable UI components
│   │   │   ├── routes/            # App routes
│   │   │   └── hooks/             # Custom React hooks
│   │   └── worker/                # Cloudflare Worker for tRPC
│   └── data-service/              # Backend API service
│       └── src/
│           ├── hono/              # Hono app configuration
│           └── helpers/           # Utility functions
├── packages/                      # Shared packages
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

### Scripts

- `pnpm dev-frontend` - Start frontend development server
- `pnpm dev-data-service` - Start backend service with Wrangler
- `pnpm build-package` - Build shared packages

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

The project is configured for deployment on Cloudflare:

```bash
# Deploy frontend
cd apps/user-application
pnpm deploy

# Deploy backend
cd apps/data-service
pnpm deploy
```

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

- **Frontend**: React, TypeScript, TanStack Router/Query, Tailwind CSS
- **Backend**: Cloudflare Workers, Hono, D1 Database
- **API**: tRPC for type-safe client-server communication
- **Authentication**: Better Auth with Stripe integration
- **Real-time**: Socket.io for live updates
- **Deployment**: Cloudflare infrastructure
- **Build Tools**: Vite, pnpm workspaces

## 📄 License

ISC License