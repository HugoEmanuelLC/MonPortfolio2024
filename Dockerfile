FROM node:18-alpine

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
