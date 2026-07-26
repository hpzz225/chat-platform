# Chat Platform

A Discord/Slack-style chat platform optimized for product and production operations.

## Stack

- **Frontend**: React + Vite (deployed on Vercel)
- **Backend**: NestJS (deployed on Render/Cloud Run)
- **Database**: PostgreSQL + Prisma ORM
- **Cache**: Redis (Upstash)
- **Storage**: Cloudflare R2/S3
- **Monorepo**: Turborepo + pnpm

## Project Structure

```
chat-platform/
├── apps/
│   ├── client/          # React frontend
│   └── server/          # NestJS backend
├── packages/
│   ├── database/        # Prisma schema & generated client
│   ├── eslint-config/   # Shared ESLint config
│   └── typescript-config/ # Shared TypeScript config
├── docker-compose.yml   # PostgreSQL + Redis for dev
└── .env.example         # Environment variables template
```

## Setup

### 1. Install dependencies

```bash
pnpm install
```

### 2. Setup environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_URL`: Redis connection string
- `JWT_SECRET`: Secret key for JWT
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: development | production | test

### 3. Start database

```bash
docker-compose up -d
```

Make sure Docker Desktop is running first.

### 4. Run migrations

```bash
cd packages/database
pnpm db:migrate
```

### 5. Generate Prisma client

```bash
cd packages/database
pnpm db:generate
```

Or from root:

```bash
pnpm build
```

## Development

### Start server

```bash
cd apps/server
pnpm dev
```

Server runs on port 3000 (or PORT in .env).

### Start client

```bash
cd apps/client
pnpm dev
```

### Build entire project

```bash
pnpm build
```

### Typecheck

```bash
pnpm check-types
```

### Lint

```bash
pnpm lint
```

## Database commands

```bash
cd packages/database

# Generate Prisma client
pnpm db:generate

# Run migration (dev)
pnpm db:migrate

# Push schema changes (dev, no migration)
pnpm db:push

# Open Prisma Studio
pnpm db:studio
```

## Docker

```bash
# Start containers
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs

# View logs for specific service
docker-compose logs postgres
docker-compose logs redis
```

## Roadmap

See [docs/roadmap.md](./docs/roadmap.md) for milestone details and progress.

## Technical Decisions

- **Not all-in Vercel for backend**: NestJS is a long-running server with WebSocket/realtime
- **Prisma 7 driver adapter**: Connection pooling managed by driver (`pg`), not Prisma engine
- **Database package is source of truth**: Schema and generated client in `packages/database`

## Troubleshooting

### Docker not running

- Make sure Docker Desktop is started
- Check: `docker ps`

### Migration errors

- Ensure PostgreSQL is running: `docker-compose ps`
- Check DATABASE_URL in .env

### Prisma client errors

- Run: `cd packages/database && pnpm db:generate`
- Or: `pnpm build` from root

### Server not starting

- Check if port 3000 is available
- Check .env has all required variables
- View logs: `pnpm dev`
