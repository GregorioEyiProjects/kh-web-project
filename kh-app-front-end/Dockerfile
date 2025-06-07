# Build stage
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve static files using nginx
FROM nginx:alpine

# Copy built static files to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port (default for nginx is 80)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
