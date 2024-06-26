FROM node:alpine3.18 as build

# Declare build time environment variables
ARG VITE_WEB_BASE_URL
ARG VITE_API_BASE_URL
ARG VITE_AUTH_DOMAIN_URL

# Set default values for environment variables
ENV VITE_WEB_BASE_URL=$VITE_WEB_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_AUTH_DOMAIN_URL=$VITE_AUTH_DOMAIN_URL

#Build App
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
EXPOSE 3001
CMD ["nginx","-g","daemon off;"]

#FROM nginx:1.23-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#RUN rm -rf *
#COPY --from=build /app/dist .
#EXPOSE 80
#ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
