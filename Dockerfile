FROM nginx:alpine

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
