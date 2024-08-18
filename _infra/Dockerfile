FROM node:22-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.27.1-alpine AS deploy

WORKDIR /app

COPY ./_infra/default.conf /etc/nginx/conf.d

COPY --from=build /app/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
