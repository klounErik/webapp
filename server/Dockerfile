FROM node:7.7.2-alpine
WORKDIR /usr/app

COPY package.json .
RUN npm install express cors

EXPOSE 8080
EXPOSE 80

COPY . .
