# FROM node:20-alpine

# WORKDIR /app

# RUN npm install -g serve

# # Copy from your local project's dist folder into the container's dist folder
# COPY dist ./dist

# EXPOSE 3000

# CMD ["serve", "-s", "dist", "-l", "3000"]

FROM nginx:alpine

# Replace the default Nginx configuration with your custom one
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy your built React dist folder into the Nginx static folder
COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]