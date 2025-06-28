# Development stage - Node.js 18 for Storybook compatibility
FROM node:18-alpine

# Set working directory as per requirements
WORKDIR /wang_yue_ui_garden

# Copy package files
COPY wang_yue_ui_garden/package*.json ./

# Install dependencies with legacy peer deps to resolve conflicts
RUN npm install --legacy-peer-deps

# Copy source code
COPY wang_yue_ui_garden/ ./

# Expose port 8083 as required
EXPOSE 8083

# Start development server on port 8083
CMD ["npm", "run", "start:storybook"]