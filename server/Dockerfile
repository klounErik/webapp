FROM node:12.8.0 AS server
WORKDIR /usr/app

COPY package.json .
RUN npm install express cors

EXPOSE 80

COPY . .
