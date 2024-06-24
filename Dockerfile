FROM node:alpine3.18 as build

#Build App
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#
FROM nginx:1.23-alpine
WORKDIR /use/share/nginx/html
RUN rm -rf *
COPY --from=build /app/dist .
EXPOSE 5173
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
