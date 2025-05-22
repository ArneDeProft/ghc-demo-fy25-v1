# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Production stage
FROM node:20-alpine as production

WORKDIR /app

# Set up a non-root user for better security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --production

# Copy built application from the build stage
COPY --from=build --chown=appuser:appgroup /app/dist ./dist

# Use non-root user
USER appuser

# Expose the application port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Run the application
CMD ["node", "dist/index.js"]