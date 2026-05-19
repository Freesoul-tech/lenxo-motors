# Docker Setup Guide

This backend is fully containerized with Docker and Docker Compose for easy development and deployment.

## Quick Start

### Prerequisites

- Docker Desktop installed (includes Docker Engine and Docker Compose)
- No need to install Node.js, PostgreSQL, or other dependencies locally

### Development Setup

1. **Start all services:**

```bash
docker-compose up
```

This will start:

- PostgreSQL database on `localhost:5432`
- NestJS backend on `localhost:3000`
- pgAdmin (optional) on `localhost:5050`

2. **Run migrations:**

```bash
docker-compose exec backend npm run migrate
```

3. **View logs:**

```bash
docker-compose logs -f backend
docker-compose logs -f postgres
```

4. **Stop services:**

```bash
docker-compose down
```

## Common Commands

### Build the backend image

```bash
docker build -f backend/Dockerfile -t lenxo-backend .
```

### Run containers with custom environment

```bash
docker-compose up --env-file .env.custom
```

### Execute commands in running container

```bash
# Install dependencies
docker-compose exec backend npm install

# Run tests
docker-compose exec backend npm test

# View database
docker-compose exec postgres psql -U postgres -d lenxo_motors
```

### Remove everything (clean slate)

```bash
docker-compose down -v  # -v removes volumes too
```

## Environment Variables

Copy `.env.docker` to `.env` for local development:

```bash
cp .env.docker .env
```

Key variables:

- `NODE_ENV` - Set to `development` or `production`
- `DATABASE_URL` - PostgreSQL connection string
- `POSTGRES_PASSWORD` - Database password

## Volume Mounts

In development mode, source code is mounted:

```yaml
volumes:
  - ./backend/server/src:/app/backend/server/src
  - ./backend/server/node_modules:/app/backend/server/node_modules
```

This allows hot-reloading when you modify files. To disable, remove these lines.

## Production Deployment

For production, use the multi-stage Dockerfile which:

1. ✅ Reduces image size (only runtime dependencies)
2. ✅ Runs as non-root user for security
3. ✅ Includes health checks
4. ✅ Properly handles signals for graceful shutdown

Build for production:

```bash
docker build -f backend/Dockerfile -t lenxo-backend:prod .
```

## Database Connections

### From inside container

```
postgresql://postgres:password@postgres:5432/lenxo_motors
```

### From host machine

```
postgresql://postgres:password@localhost:5432/lenxo_motors
```

### pgAdmin Web UI

```
http://localhost:5050
- Email: admin@example.com
- Password: admin
```

## Troubleshooting

### Port already in use

```bash
# Change ports in docker-compose.yml or use environment variables
BACKEND_PORT=3001 docker-compose up
```

### Database connection refused

```bash
# Check if postgres is healthy
docker-compose ps
docker-compose logs postgres
```

### Permission denied errors

The container runs as non-root user `nestjs:nodejs` for security.
If volumes have permission issues, ensure files are readable.

### Clear everything and restart

```bash
docker-compose down -v
docker system prune
docker-compose up --build
```

## Docker Architecture

```
┌─────────────────────────────────────┐
│     docker-compose.yml              │
├─────────────────────────────────────┤
│ Services:                           │
│ ├─ backend (NestJS)                 │
│ ├─ postgres (PostgreSQL)            │
│ └─ pgadmin (Database UI)            │
│                                     │
│ Networks: lenxo_network             │
│ Volumes: postgres_data              │
└─────────────────────────────────────┘
```

## Performance Tips

1. **Use named volumes** for better performance than bind mounts
2. **Prune unused images/containers** regularly: `docker system prune`
3. **Use .dockerignore** to exclude unnecessary files from build context
4. **Multi-stage builds** keep production image small (~150MB vs 500MB+)

## Further Reading

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [NestJS Docker Guide](https://docs.nestjs.com/deployment/docker)
