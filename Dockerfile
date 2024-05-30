FROM node:18-alpine

# WORKDIR /app

COPY . .

# RUN npm install -g npm@10.5.0
# RUN npm install

EXPOSE 3038

# CMD [ "npm", "run", "dev" ]