# Multi-stage build for production
# Stage 1: Build the React application
FROM node:20-alpine AS builder


# Set working directory
WORKDIR /wang_yue_ui_garden

# Copy package files
COPY wang_yue_ui_garden/package*.json ./

# Install dependencies first (before copying source code)
RUN npm install --legacy-peer-deps

# Copy source code (excluding node_modules to avoid platform conflicts)
COPY wang_yue_ui_garden/src ./src
COPY wang_yue_ui_garden/public ./public
COPY .storybook ./.storybook
COPY wang_yue_ui_garden/tsconfig.json ./tsconfig.json
COPY wang_yue_ui_garden/README.md ./README.md

# Set NODE_ENV for production build
ENV NODE_ENV=production

# Try building Storybook, if it fails, build the regular React app
RUN npm run build:storybook

# Stage 2: Serve the built application with nginx
FROM nginx:alpine

# Copy the built app from the builder stage
COPY --from=builder /wang_yue_ui_garden/build /usr/share/nginx/html

# Replace the React app index.html with a custom Storybook manager
COPY storybook-manager.html /usr/share/nginx/html/index.html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8083
EXPOSE 8083

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
