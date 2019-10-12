FROM node:12.8.0 AS server
WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY . .