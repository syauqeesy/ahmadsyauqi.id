FROM nginx:1.27.1-alpine

WORKDIR /app

COPY ./_deployment/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./favicon.ico /app
COPY ./index.html /app
COPY ./main.css /app
COPY ./poppins.ttf /app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
