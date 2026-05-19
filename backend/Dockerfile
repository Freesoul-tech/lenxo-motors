# Stage 1: Dependencies
FROM node:20-alpine AS dependencies
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY backend/package*.json ./backend/

# Install dependencies
RUN npm ci

# Stage 2: Builder
FROM dependencies AS builder
WORKDIR /app

# Copy source files
COPY backend ./backend
COPY prisma ./prisma

# Build the NestJS application
WORKDIR /app/backend/server
RUN npm run build

# Stage 3: Runtime
FROM node:20-alpine AS runtime
WORKDIR /app

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Copy package files
COPY --from=dependencies /app/package*.json ./
COPY --from=dependencies /app/backend/package*.json ./backend/

# Install production dependencies only
RUN npm ci --omit=dev

# Copy built application from builder
COPY --from=builder /app/backend/server/dist ./backend/server/dist
COPY --from=builder /app/backend/server/node_modules ./backend/server/node_modules

# Copy prisma files for migrations
COPY --from=builder /app/prisma ./prisma

# Change ownership
RUN chown -R nestjs:nodejs /app

# Switch to non-root user
USER nestjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["node", "backend/server/dist/main"]
