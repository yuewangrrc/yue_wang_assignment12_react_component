FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /wang_yue_ui_garden
# Cache and Install dependencies
COPY wang_yue_ui_garden/package*.json .
RUN npm install
# Copy app files
COPY wang_yue_ui_garden/. .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]