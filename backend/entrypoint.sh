#!/bin/bash
# Docker entrypoint script for database migrations

set -e

echo "Waiting for PostgreSQL..."
while ! nc -z postgres 5432; do
  sleep 1
done

echo "PostgreSQL is ready!"

# Run Prisma migrations
echo "Running database migrations..."
cd /app/backend
npx prisma migrate deploy

echo "Migrations complete!"

# Start the application
exec "$@"
