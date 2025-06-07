# Use the official Node.js image
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .
RUN npm run build

# Serve static files using nginx (Production stage)
FROM nginx:alpine

# Copy built static files to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

#This line below contains the "build" dirrectory and it does not work for Vite app
#COPY --from=build /app/build /usr/share/nginx/html

# Expose port (default for nginx is 80)
EXPOSE 80

# Command to run the app
# Start nginx
CMD ["nginx", "-g", "daemon off;"]