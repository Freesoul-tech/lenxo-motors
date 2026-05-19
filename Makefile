.PHONY: help docker-build docker-up docker-down docker-logs docker-shell docker-test docker-clean

help:
	@echo "Docker commands for Lenxo Motors Backend"
	@echo ""
	@echo "Development:"
	@echo "  make docker-up         - Start development containers"
	@echo "  make docker-down       - Stop development containers"
	@echo "  make docker-logs       - View logs from backend"
	@echo "  make docker-shell      - Open shell in backend container"
	@echo "  make docker-test       - Run tests in container"
	@echo ""
	@echo "Build & Deploy:"
	@echo "  make docker-build      - Build backend image"
	@echo "  make docker-build-prod - Build production image"
	@echo ""
	@echo "Cleanup:"
	@echo "  make docker-clean      - Remove stopped containers and unused images"
	@echo "  make docker-clean-all  - Remove everything (including volumes)"

# Development
docker-up:
	docker-compose up

docker-up-build:
	docker-compose up --build

docker-down:
	docker-compose down

docker-logs:
	docker-compose logs -f backend

docker-logs-db:
	docker-compose logs -f postgres

docker-shell:
	docker-compose exec backend sh

docker-test:
	docker-compose exec backend npm test

docker-migrate:
	docker-compose exec backend npm run prisma migrate dev

# Build
docker-build:
	docker build -f backend/Dockerfile -t lenxo-backend:dev .

docker-build-prod:
	docker build -f backend/Dockerfile -t lenxo-backend:latest .

# Cleanup
docker-clean:
	docker-compose down --remove-orphans
	docker system prune -f

docker-clean-all:
	docker-compose down -v
	docker system prune -af

# Production
docker-up-prod:
	docker-compose -f docker-compose.prod.yml up -d

docker-down-prod:
	docker-compose -f docker-compose.prod.yml down

docker-logs-prod:
	docker-compose -f docker-compose.prod.yml logs -f backend
